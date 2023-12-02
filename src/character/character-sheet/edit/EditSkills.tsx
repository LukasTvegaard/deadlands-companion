import { ref, set } from "firebase/database";
import { useContext } from "react";

import { CharacterContext } from "../../../DeadlandsCompanion";
import Page from "../../../shared/page/Page";
import {
  DieType,
  Skill,
  SkillLinkedAttribute,
  getSkillName,
} from "../../../utils/enums";
import { database } from "../../../utils/firebase/Firebase";
import { ButtonRow } from "../../../shared/rows/ButtonRow";
import { availableSkillFilter } from "../../character-logic/SkillLogic";
import { Locations } from "../../../utils/Location";
import { SkillRow } from "./SkillRow";
import { ListTitle } from "../../../shared/text/ListTitle";

type ChangeSkillDieTypeInput = {
  characterKey: string;
  skill: Skill;
  dieType: DieType | null;
};
const changeSkillDieType = ({
  characterKey,
  skill,
  dieType,
}: ChangeSkillDieTypeInput) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/skills/${skill}`), dieType);
};

type UnlearnedSkillRowProps = {
  skill: Skill;
  addSkill: (skill: Skill, dieType: DieType) => void;
};
const UnlearnedSkillRow = ({ skill, addSkill }: UnlearnedSkillRowProps) => {
  const skillName = getSkillName(skill);

  return (
    <ButtonRow
      label={skillName}
      secondaryLabel={SkillLinkedAttribute[skill]}
      onClick={() => addSkill(skill, DieType.D4)}
    />
  );
};

export const EditSkills = () => {
  const character = useContext(CharacterContext);

  const changeSkill = (skill: Skill, dieType: DieType) => {
    changeSkillDieType({ characterKey: character.id, skill, dieType });
  };

  const removeSkill = (skill: Skill) => {
    changeSkillDieType({ characterKey: character.id, skill, dieType: null });
  };

  const unlearnedSkills = (Object.keys(Skill) as Skill[]).filter((skill) =>
    availableSkillFilter(skill, character)
  );

  return (
    <Page pageName="Edit Skills" prevLocation={Locations.CharacterSheet}>
      {character.skills
        ? Object.entries(character.skills).map(([skill, skillDieType]) => {
            const typedSkill = skill as Skill;
            return (
              <SkillRow
                key={skill}
                skill={typedSkill}
                currentSkillValue={skillDieType}
                changeSkillDieType={changeSkill}
                removeSkill={removeSkill}
              />
            );
          })
        : null}
      <ListTitle>Unlearned Skills</ListTitle>
      {unlearnedSkills.map((skill) => {
        return (
          <UnlearnedSkillRow key={skill} skill={skill} addSkill={changeSkill} />
        );
      })}
    </Page>
  );
};
