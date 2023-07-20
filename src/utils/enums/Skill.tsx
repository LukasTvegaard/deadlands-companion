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

export const getSkillName = (skill: Skill): string => {
  switch (skill) {
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
