import { CharacterContext } from "../../DeadlandsCompanion";
import { useContext } from "react";
import { database } from "../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { characterHasWeapon } from "../../static/weapons/WeaponUtil";
import { Weapon } from "../../utils/enums/Weapon";

const addWeapon = (characterKey: string, weaponKey: Weapon) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/weapons/${weaponKey}`), 0);
};

const removeWeapon = (
  characterKey: string,
  weaponKey: Weapon,
  weaponName: string
) => {
  if (window.confirm(`Are you sure you want to remove "${weaponName}"?`)) {
    const db = database();
    set(ref(db, `characters/${characterKey}/weapons/${weaponKey}`), null);
  }
};

type WeaponDetailProps = {
  weaponDetail: WeaponDetailType | undefined;
};
export const WeaponDetail = ({ weaponDetail }: WeaponDetailProps) => {
  const character = useContext(CharacterContext);

  if (!weaponDetail) {
    return <div>Weapon not found</div>;
  }

  const hasWeapon =
    character && characterHasWeapon(weaponDetail.key, character);
  const addToCharacterButton = character ? (
    <button onClick={() => addWeapon(character.id, weaponDetail.key)}>
      Add weapon to character
    </button>
  ) : null;
  const removeFromCharacterButton = character ? (
    <button
      onClick={() =>
        removeWeapon(character?.id, weaponDetail.key, weaponDetail.name)
      }
    >
      Remove weapon from character
    </button>
  ) : null;

  return (
    <div>
      {weaponDetail.name}
      {hasWeapon ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
