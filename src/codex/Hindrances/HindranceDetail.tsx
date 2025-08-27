import { useContext } from "react";
import { database } from "../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { characterHasHindrance } from "../../static/hindrances/HindranceUtil";
import { Button } from "../../shared/buttons/Button";
import { CharacterContext } from "../../CharacterContext";

const addHindrance = (characterKey: string, hindranceKey: Hindrance) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/hindrances/${hindranceKey}`), true);
};

const removeHindrance = (
  characterKey: string,
  hindranceKey: Hindrance,
  hindranceName: string
) => {
  if (window.confirm(`Are you sure you want to remove "${hindranceName}"?`)) {
    const db = database();
    set(ref(db, `characters/${characterKey}/hindrances/${hindranceKey}`), null);
  }
};

type HindranceDetailProps = {
  hindranceDetail: HindranceDetailType | undefined;
};
export const HindranceDetail = ({ hindranceDetail }: HindranceDetailProps) => {
  const character = useContext(CharacterContext);

  if (!hindranceDetail) {
    return <div>Hindrance not found</div>;
  }

  const hasHindrance =
    character && characterHasHindrance(hindranceDetail.key, character);
  const addToCharacterButton = character ? (
    <Button
      text="Add hindrance to character"
      onClick={() => addHindrance(character?.id, hindranceDetail.key)}
    />
  ) : null;
  const removeFromCharacterButton = character ? (
    <Button
      text="Remove hindrance from character"
      negative
      onClick={() =>
        removeHindrance(
          character?.id,
          hindranceDetail.key,
          hindranceDetail.name
        )
      }
    />
  ) : null;

  return (
    <div>
      {hindranceDetail.name}
      {hasHindrance ? removeFromCharacterButton : addToCharacterButton}
    </div>
  );
};
