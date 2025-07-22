import { Potion, PotionData } from "../../utils/types/Potion";

export const createPotion = async (potionData: PotionData) => {
  // Reduce the creator's current power points by the potion's powerPointCost.
  console.log("Created potion: ", potionData);
  return null;
};

export const givePotion = async (potion: Potion, targetCharacterId: string) => {
  // If potion is not currently possessed by the creator, remove the potion from the person currently possessing it.

  // If targetCharacterId is not the creator, add the potion to the target character's potion list.
  // IMPORTANT: When adding the potion, use set rather than push to ensure the potion ID is consistent.
  // The potion ID should be the same for both the creator and the person who possesses it.

  // Update the possessedby field of the creator's replica of the potion to the target character's ID.

  console.log(`Giving potion ${potion.id} to character ${targetCharacterId}`);
  return null;
};

export const consumePotion = async (potion: Potion) => {
  // If potion is not currently possessed by the creator, remove the potion from the creator as well.

  // Remove the potion from the consumer's potion list.
  console.log(`Using potion ${potion.id}`);
  return null;
};
