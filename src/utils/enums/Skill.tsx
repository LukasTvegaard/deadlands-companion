import { Attribute } from "./Attribute";

export enum Skill {
  Boating = "Boating",
  Climbing = "Climbing",
  Driving = "Driving",
  Faith = "Faith",
  Fighting = "Fighting",
  Gambling = "Gambling",
  Guts = "Guts",
  Healing = "Healing",
  Intimidation = "Intimidation",
  Investigation = "Investigation",
  KnowledgeCommon = "KnowledgeCommon",
  KnowledgeScience = "KnowledgeScience",
  KnowledgeOccult = "KnowledgeOccult",
  Lockpicking = "Lockpicking",
  Notice = "Notice",
  Persuasion = "Persuasion",
  Piloting = "Piloting",
  Repair = "Repair",
  Riding = "Riding",
  Shooting = "Shooting",
  Spellcasting = "Spellcasting",
  Stealth = "Stealth",
  Streetwise = "Streetwise",
  Survival = "Survival",
  Swimming = "Swimming",
  Taunt = "Taunt",
  Throwing = "Throwing",
  Tracking = "Tracking",
  TribalMedicine = "TribalMedicine",
  WeirdScience = "WeirdScience",
}

export const Unskilled = "Unskilled";

type LinkedAttributeType = {
  [key in Skill]: Attribute;
};
export const SkillLinkedAttribute: LinkedAttributeType = {
  [Skill.Boating]: Attribute.Agility,
  [Skill.Climbing]: Attribute.Strength,
  [Skill.Driving]: Attribute.Agility,
  [Skill.Faith]: Attribute.Spirit,
  [Skill.Fighting]: Attribute.Agility,
  [Skill.Gambling]: Attribute.Smarts,
  [Skill.Guts]: Attribute.Spirit,
  [Skill.Healing]: Attribute.Smarts,
  [Skill.Intimidation]: Attribute.Spirit,
  [Skill.Investigation]: Attribute.Smarts,
  [Skill.KnowledgeCommon]: Attribute.Smarts,
  [Skill.KnowledgeScience]: Attribute.Smarts,
  [Skill.KnowledgeOccult]: Attribute.Smarts,
  [Skill.Lockpicking]: Attribute.Smarts,
  [Skill.Notice]: Attribute.Smarts,
  [Skill.Persuasion]: Attribute.Spirit,
  [Skill.Piloting]: Attribute.Agility,
  [Skill.Repair]: Attribute.Smarts,
  [Skill.Riding]: Attribute.Agility,
  [Skill.Shooting]: Attribute.Agility,
  [Skill.Spellcasting]: Attribute.Smarts,
  [Skill.Stealth]: Attribute.Agility,
  [Skill.Streetwise]: Attribute.Smarts,
  [Skill.Survival]: Attribute.Smarts,
  [Skill.Swimming]: Attribute.Agility,
  [Skill.Taunt]: Attribute.Smarts,
  [Skill.Throwing]: Attribute.Agility,
  [Skill.Tracking]: Attribute.Smarts,
  [Skill.TribalMedicine]: Attribute.Spirit,
  [Skill.WeirdScience]: Attribute.Smarts,
};

export const getSkillName = (skill: Skill): string => {
  switch (skill) {
    case Skill.KnowledgeCommon:
      return "Knowledge (Common)";
    case Skill.KnowledgeScience:
      return "Knowledge (Science)";
    case Skill.KnowledgeOccult:
      return "Knowledge (Occult)";
    case Skill.TribalMedicine:
      return "Tribal Medicine";
    case Skill.WeirdScience:
      return "Weird Science";
    default:
      return skill;
  }
};
