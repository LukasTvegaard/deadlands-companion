import { useParams } from "react-router-dom";
import { Attribute, Skill, Unskilled, getSkillName } from "../../utils/enums";
import { getEnumByString } from "../../utils/enums/EnumUtil";
import { getRoll } from "../character-logic/roll-logic/RollLogic";
import Page from "../../shared/page/Page";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Rollable, rollableIsSkill } from "../../utils/types/Rollable";
import { Locations } from "../../utils/Location";

const getRollTarget = (key: string | undefined): Rollable | undefined => {
  if (key === Unskilled) {
    return key;
  }
  const attribute = getEnumByString(key, Attribute);
  const skill = getEnumByString(key, Skill);

  return attribute ?? skill;
};

const getRollLabel = (rollTarget: Rollable): string => {
  if (rollableIsSkill(rollTarget)) {
    return getSkillName(rollTarget);
  }
  return rollTarget;
};

export const RollHelper = () => {
  const routeParams = useParams();
  const character = useContext(CharacterContext);

  const rollTarget = getRollTarget(routeParams.id);

  if (!rollTarget || !character) return null;

  const rollLabel = getRollLabel(rollTarget);
  const roll = getRoll(rollTarget, character);

  console.log(roll);

  return (
    <Page
      pageName={`Roll ${rollLabel}`}
      prevLocation={Locations.CharacterSheet}
    >
      <div>hello</div>
    </Page>
  );
};
