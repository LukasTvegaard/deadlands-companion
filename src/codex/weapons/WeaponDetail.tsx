import { useContext } from "react";
import { database } from "../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { WeaponDetailType } from "../../utils/types/WeaponDetailType";
import { characterHasWeapon } from "../../static/weapons/WeaponUtil";
import { Weapon } from "../../utils/enums/Weapon";
import { Button } from "../../shared/buttons/Button";
import { CharacterContext } from "../../CharacterContext";

const addWeapon = (characterKey: string, weaponKey: Weapon) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/weapons/${weaponKey}`), { ammo: 0 });
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
    <Button
      text="Add weapon to character"
      onClick={() => addWeapon(character.id, weaponDetail.key)}
    />
  ) : null;
  const removeFromCharacterButton = character ? (
    <Button
      text="Remove weapon from character"
      negative
      onClick={() =>
        removeWeapon(character?.id, weaponDetail.key, weaponDetail.name)
      }
    />
  ) : null;

  return (
    <div>
      {weaponDetail.name}
      {hasWeapon ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
