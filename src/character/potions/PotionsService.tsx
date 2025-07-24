import { push, ref, remove, runTransaction } from "firebase/database";
import { database } from "../../utils/firebase/Firebase";
import { Potion, PotionData } from "../../utils/types/Potion";
import { set } from "../../utils/firebase/DataAccess";

export const createPotion = async (potionData: PotionData) => {
  const db = database();

  // Add the potion to the creator's potion list.
  const creatorPotionsRef = ref(
    db,
    `characters/${potionData.createdBy}/potions`
  );
  const newPotionRef = push(creatorPotionsRef);
  set<PotionData>(newPotionRef, potionData);

  // If targetCharacterId is not the creator, add the potion to the target character's potion list.
  // IMPORTANT: When adding the potion, set is used rather than push to ensure the potion ID is consistent.
  if (
    potionData.possessedBy &&
    potionData.possessedBy !== potionData.createdBy
  ) {
    const targetPotionsRef = ref(
      db,
      `characters/${potionData.possessedBy}/potions/${newPotionRef.key}`
    );
    set<PotionData>(targetPotionsRef, potionData);
  }

  // Reduce the creator's current power points by the potion's powerPointCost.
  const potionPowerRef = ref(
    db,
    `characters/${potionData.createdBy}/powers/${potionData.power}`
  );
  runTransaction(potionPowerRef, (prevPoints) => {
    return (prevPoints || 0) - potionData.powerPointCost;
  });
};

export const givePotion = async (potion: Potion, targetCharacterId: string) => {
  const db = database();

  // If potion is not currently possessed by the creator, remove the potion from the person currently possessing it.
  if (potion.possessedBy && potion.possessedBy !== potion.createdBy) {
    const currentPossessionRef = ref(
      db,
      `characters/${potion.possessedBy}/potions/${potion.id}`
    );
    remove(currentPossessionRef);
  }

  // If targetCharacterId is not the creator, add the potion to the target character's potion list.
  // IMPORTANT: When adding the potion, set is used rather than push to ensure the potion ID is consistent.
  if (targetCharacterId !== potion.createdBy) {
    const newOwnerPotionsRef = ref(
      db,
      `characters/${targetCharacterId}/potions/${potion.id}`
    );
    set<PotionData>(newOwnerPotionsRef, {
      ...potion,
      possessedBy: targetCharacterId,
    });
  }

  // Update the possessedBy field of the creator's replica of the potion to the target character's ID.
  const creatorPotionRef = ref(
    db,
    `characters/${potion.createdBy}/potions/${potion.id}`
  );
  set(creatorPotionRef, {
    ...potion,
    possessedBy: targetCharacterId,
  });
};

export const consumePotion = async (potion: Potion) => {
  const db = database();

  // Remove the potion from the creator's potion list.
  const potionRef = ref(
    db,
    `characters/${potion.createdBy}/potions/${potion.id}`
  );
  remove(potionRef);

  // If potion is not currently possessed by the creator, remove the potion from the consumer as well.
  if (potion.possessedBy && potion.possessedBy !== potion.createdBy) {
    const targetPotionRef = ref(
      db,
      `characters/${potion.possessedBy}/potions/${potion.id}`
    );
    remove(targetPotionRef);
  }
};
