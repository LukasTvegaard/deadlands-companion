import { useContext } from "react";
import { database } from "../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { characterHasPower } from "../../static/powers/PowerUtil";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { Power } from "../../utils/enums/Power";
import { Button } from "../../shared/buttons/Button";
import { CharacterContext } from "../../CharacterContext";

const addPower = (characterKey: string, powerKey: Power) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/powers/${powerKey}`), 0);
};

const removePower = (
  characterKey: string,
  powerKey: Power,
  powerName: string
) => {
  if (window.confirm(`Are you sure you want to remove "${powerName}"?`)) {
    const db = database();
    set(ref(db, `characters/${characterKey}/powers/${powerKey}`), null);
  }
};

type PowerDetailProps = {
  powerDetail: PowerDetailType | undefined;
};
export const PowerDetail = ({ powerDetail }: PowerDetailProps) => {
  const character = useContext(CharacterContext);

  if (!powerDetail) {
    return <div>Power not found</div>;
  }

  const hasPower = character && characterHasPower(powerDetail.key, character);
  const addToCharacterButton = character ? (
    <Button
      text="Add power to character"
      onClick={() => addPower(character.id, powerDetail.key)}
    />
  ) : null;
  const removeFromCharacterButton = character ? (
    <Button
      text="Remove power from character"
      negative
      onClick={() =>
        removePower(character?.id, powerDetail.key, powerDetail.name)
      }
    />
  ) : null;

  return (
    <div>
      {powerDetail.name}
      {hasPower ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
