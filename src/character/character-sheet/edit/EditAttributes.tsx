import { ref, set } from "firebase/database";
import { useContext } from "react";

import { DiceRow } from "../../../shared/rows/DiceRow";
import Page from "../../../shared/page/Page";
import { Attribute, DieType } from "../../../utils/enums";
import { database } from "../../../utils/firebase/Firebase";
import { Locations } from "../../../utils/Location";
import { CharacterContext } from "../../../CharacterContext";

type ChangeAttributeDieTypeInput = {
  characterKey: string;
  attribute: Attribute;
  dieType: DieType;
};
const changeAttributeDieType = ({
  characterKey,
  attribute,
  dieType,
}: ChangeAttributeDieTypeInput) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/attributes/${attribute}`), dieType);
};

type AttributeRowProps = {
  attribute: Attribute;
  currentAttributeValue: DieType;
  changeAttributeDieType: (attribute: Attribute, dieType: DieType) => void;
};
const AttributeRow = ({
  attribute,
  currentAttributeValue,
  changeAttributeDieType,
}: AttributeRowProps) => {
  const onDiceClick = (dieType: DieType) => {
    changeAttributeDieType(attribute, dieType);
  };
  return (
    <DiceRow
      label={attribute}
      activeDieType={currentAttributeValue}
      onDiceClick={onDiceClick}
    />
  );
};

export const EditAttributes = () => {
  const character = useContext(CharacterContext);

  const changeAttribute = (attribute: Attribute, dieType: DieType) => {
    changeAttributeDieType({ characterKey: character.id, attribute, dieType });
  };

  return (
    <Page pageName="Edit Attributes" prevLocation={Locations.CharacterSheet}>
      <AttributeRow
        attribute={Attribute.Agility}
        currentAttributeValue={character.attributes.Agility}
        changeAttributeDieType={changeAttribute}
      />
      <AttributeRow
        attribute={Attribute.Smarts}
        currentAttributeValue={character.attributes.Smarts}
        changeAttributeDieType={changeAttribute}
      />
      <AttributeRow
        attribute={Attribute.Spirit}
        currentAttributeValue={character.attributes.Spirit}
        changeAttributeDieType={changeAttribute}
      />
      <AttributeRow
        attribute={Attribute.Strength}
        currentAttributeValue={character.attributes.Strength}
        changeAttributeDieType={changeAttribute}
      />
      <AttributeRow
        attribute={Attribute.Vigor}
        currentAttributeValue={character.attributes.Vigor}
        changeAttributeDieType={changeAttribute}
      />
    </Page>
  );
};
