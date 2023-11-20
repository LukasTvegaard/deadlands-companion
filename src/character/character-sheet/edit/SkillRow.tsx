import { DiceRow } from "../../../shared/rows/DiceRow";
import { DieType, Skill, getSkillName } from "../../../utils/enums";

type SkillRowProps = {
  skill: Skill;
  currentSkillValue: DieType;
  changeSkillDieType: (skill: Skill, dieType: DieType) => void;
  removeSkill: (skill: Skill) => void;
};
export const SkillRow = ({
  skill,
  currentSkillValue,
  changeSkillDieType,
  removeSkill,
}: SkillRowProps) => {
  const skillName = getSkillName(skill);
  const onDiceClick = (dieType: DieType) => {
    changeSkillDieType(skill, dieType);
  };
  const onDeleteClick = () => {
    if (window.confirm(`Are you sure you want to remove "${skillName}"?`)) {
      removeSkill(skill);
    }
  };
  return (
    <DiceRow
      label={skillName}
      activeDieType={currentSkillValue}
      onDiceClick={onDiceClick}
      onDeleteClick={onDeleteClick}
    />
  );
};
