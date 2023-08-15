import { DieType, Edge, EdgeCategory, Rank, Skill } from "../../../utils/enums";
import { EdgeDetailType } from "../../../utils/interfaces/EdgeDetail";
import { SkillRequirement, StatRequirement } from "../../../utils/types";

const StatRequirements: StatRequirement[] = [];

const SkillRequirements: SkillRequirement[] = [
  {
    skill: Skill.Taunt,
    dieType: DieType.D6,
  },
];

const EdgeRequirements: Edge[] = [];

export const GallowsHumor: EdgeDetailType = {
  key: Edge.GallowsHumor,
  name: "Gallows Humor",
  category: EdgeCategory.Background,
  description:
    "Your character could stare the Grim Reaper himself in the face just so long as something about him strikes your hero as funny. When a character with this Edge fails a Guts check, she may immediately re-roll using her Taunt skill with the same modifier. The hero only suffers the effects of Fear if this roll also fails - but the effects will likely be even worse. It's pretty terrifying when a joke backfires! Because it's no fun keeping a joke to oneself the ridiculing phrase MUST be spoken aloud by both the player and the character. In other words, you have to actually make light of the situation - no joke, no roll.",
  description_short:
    "Reroll Guts failures by making a joke using Taunt skill. Must say joke aloud.",
  rank_requirement: Rank.Novice,
  stat_requirements: StatRequirements,
  skill_requirements: SkillRequirements,
  edge_requirements: EdgeRequirements,
  effects: [],
};
