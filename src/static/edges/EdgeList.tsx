import { Edge, EdgeCategory, Rank } from "../../utils/enums";
import { EdgeDetailType } from "../../utils/interfaces/EdgeDetail";

import { Alertness } from "./background_edges/Alertness";
import { Ambidextrous } from "./background_edges/Ambidextrous";
import { ArcaneBackgroundMagic } from "./background_edges/ArcaneBackgroundMagic";
import { ArcaneBackgroundMiracles } from "./background_edges/ArcaneBackgroundMiracles";
import { ArcaneResistance } from "./background_edges/ArcaneResistance";
import { ArcaneResistanceImproved } from "./background_edges/ArcaneResistanceImproved";
import { Attractive } from "./background_edges/Attractive";
import { AttractiveVery } from "./background_edges/AttractiveVery";
import { Berserk } from "./background_edges/Berserk";
import { Brave } from "./background_edges/Brave";
import { Brawny } from "./background_edges/Brawny";
import { FastHealer } from "./background_edges/FastHealer";
import { FleetFooted } from "./background_edges/FleetFooted";
import { GallowsHumor } from "./background_edges/GallowsHumor";
import { Linguist } from "./background_edges/Linguist";
import { Luck } from "./background_edges/Luck";
import { LuckGreat } from "./background_edges/LuckGreat";
import { Quick } from "./background_edges/Quick";
import { Rich } from "./background_edges/Rich";
import { RichFilthy } from "./background_edges/RichFilthy";

import { BlindFighting } from "./combat_edges/BlindFighting";
import { Block } from "./combat_edges/Block";
import { BlockImproved } from "./combat_edges/BlockImproved";
import { Brawler } from "./combat_edges/Brawler";
import { Bruiser } from "./combat_edges/Bruiser";
import { CombatReflexes } from "./combat_edges/CombatReflexes";
import { Counterattack } from "./combat_edges/CounterAttack";
import { CounterAttackImproved } from "./combat_edges/CounterAttackImproved";
import { Dodge } from "./combat_edges/Dodge";
import { DodgeImproved } from "./combat_edges/DodgeImproved";
import { DontGetImRiled } from "./combat_edges/DontGetImRiled";
import { Duelist } from "./combat_edges/Duelist";
import { Elan } from "./combat_edges/Elan";

import { NewPower } from "./power_edges/NewPower";
import {
  PowerPointsHeroic,
  PowerPointsLegendary,
  PowerPointsNovice,
  PowerPointsSeasoned,
  PowerPointsVeteran,
} from "./power_edges/PowerPoints";
import { RapidRecharge } from "./power_edges/RapidRecharge";
import { RapidRechargeImproved } from "./power_edges/RapidRechargeImproved";
import { Acrobat } from "./professional_edges/Acrobat";
import { Adept } from "./professional_edges/Adept";
import { Assassin } from "./professional_edges/Assassin";
import { BornInTheSaddle } from "./professional_edges/BornInTheSaddle";
import { Champion } from "./professional_edges/Champion";
import { Gadgeteer } from "./professional_edges/Gadgeteer";
import { HolyWarrior } from "./professional_edges/HolyWarrior";
import { Investigator } from "./professional_edges/Investigator";
import { JackOfAllTrades } from "./professional_edges/JackOfAllTrades";
import { McGyver } from "./professional_edges/McGyver";
import { MrFixIt } from "./professional_edges/MrFixIt";
import { SilverTonguedDevil } from "./professional_edges/SilverTonguedDevil";
import { SnakeoilSalesman } from "./professional_edges/SnakeoilSalesman";
import { TaleTeller } from "./professional_edges/TaleTeller";
import { Thief } from "./professional_edges/Thief";

const placeholderEdge = {
  key: Edge.Acrobat,
  name: "placeholder",
  category: EdgeCategory.Background,
  description: "placeholder",
  description_short: "placeholder",
  rank_requirement: Rank.Novice,
  edge_requirements: [],
  stat_requirements: [],
  skill_requirements: [],
  effects: [],
};

export type EdgeDetails = {
  [key in Edge]: EdgeDetailType;
};
export const Edges: EdgeDetails = {
  // Background Edges
  [Edge.Alertness]: Alertness,
  [Edge.Ambidextrous]: Ambidextrous,
  [Edge.ArcaneBackgroundMagic]: ArcaneBackgroundMagic,
  [Edge.ArcaneBackgroundMiracles]: ArcaneBackgroundMiracles,
  [Edge.ArcaneBackgroundChiMastery]: placeholderEdge,
  [Edge.ArcaneBackgroundShamanism]: placeholderEdge,
  [Edge.ArcaneBackgroundWeirdScience]: placeholderEdge,

  [Edge.ArcaneResistance]: ArcaneResistance,
  [Edge.ArcaneResistanceImproved]: ArcaneResistanceImproved,
  [Edge.Attractive]: Attractive,
  [Edge.AttractiveVery]: AttractiveVery,
  [Edge.Berserk]: Berserk,
  [Edge.Brave]: Brave,
  [Edge.Brawny]: Brawny,
  [Edge.FastHealer]: FastHealer,
  [Edge.FleetFooted]: FleetFooted,
  [Edge.GallowsHumor]: GallowsHumor,
  [Edge.Linguist]: Linguist,
  [Edge.Luck]: Luck,
  [Edge.LuckGreat]: LuckGreat,
  [Edge.Quick]: Quick,
  [Edge.Rich]: Rich,
  [Edge.RichFilthy]: RichFilthy,

  // Combat edges
  [Edge.BlindFighting]: BlindFighting,
  [Edge.Block]: Block,
  [Edge.BlockImproved]: BlockImproved,
  [Edge.CombatReflexes]: CombatReflexes,
  [Edge.Counterattack]: Counterattack,
  [Edge.CounterattackImproved]: CounterAttackImproved,
  [Edge.Brawler]: Brawler,
  [Edge.Bruiser]: Bruiser,
  [Edge.Dodge]: Dodge,
  [Edge.DodgeImproved]: DodgeImproved,
  [Edge.DontGetImRiled]: DontGetImRiled,
  [Edge.Duelist]: Duelist,
  [Edge.Elan]: Elan,
  [Edge.Extraction]: placeholderEdge,
  [Edge.ExtractionImproved]: placeholderEdge,
  [Edge.FirstStrike]: placeholderEdge,
  [Edge.FirstStrikeImproved]: placeholderEdge,
  [Edge.Florentine]: placeholderEdge,
  [Edge.Frenzy]: placeholderEdge,
  [Edge.FrenzyImproved]: placeholderEdge,
  [Edge.GiantKiller]: placeholderEdge,
  [Edge.HardToKill]: placeholderEdge,
  [Edge.HarderToKill]: placeholderEdge,
  [Edge.HipShooting]: placeholderEdge,
  [Edge.HipShootingImproved]: placeholderEdge,
  [Edge.ImprovisationalFighter]: placeholderEdge,
  [Edge.IronParry]: placeholderEdge,
  [Edge.KillerInstinct]: placeholderEdge,
  [Edge.LevelHeaded]: placeholderEdge,
  [Edge.LevelHeadedImproved]: placeholderEdge,
  [Edge.Marksman]: placeholderEdge,
  [Edge.MovementOfTheSerpent]: placeholderEdge,
  [Edge.NervesOfSteel]: placeholderEdge,
  [Edge.NervesOfSteelImproved]: placeholderEdge,
  [Edge.NoMercy]: placeholderEdge,
  [Edge.Pistolero]: placeholderEdge,
  [Edge.QuickDraw]: placeholderEdge,
  [Edge.RebelYell]: placeholderEdge,
  [Edge.RockAndRoll]: placeholderEdge,
  [Edge.SpeedLoad]: placeholderEdge,
  [Edge.SteadyHands]: placeholderEdge,
  [Edge.Sweep]: placeholderEdge,
  [Edge.SweepImproved]: placeholderEdge,
  [Edge.TenTigerPunch]: placeholderEdge,
  [Edge.TrademarkWeapon]: placeholderEdge,
  [Edge.TrademarkWeaponImproved]: placeholderEdge,
  [Edge.TwoFisted]: placeholderEdge,

  // Power edges
  [Edge.NewPower]: NewPower,
  [Edge.PowerPoints_novice]: PowerPointsNovice,
  [Edge.PowerPoints_seasoned]: PowerPointsSeasoned,
  [Edge.PowerPoints_veteran]: PowerPointsVeteran,
  [Edge.PowerPoints_heroic]: PowerPointsHeroic,
  [Edge.PowerPoints_legendary]: PowerPointsLegendary,
  [Edge.RapidRecharge]: RapidRecharge,
  [Edge.RapidRechargeImproved]: RapidRechargeImproved,

  // Professional edges
  [Edge.Acrobat]: Acrobat,
  [Edge.Adept]: Adept,
  [Edge.Assassin]: Assassin,
  [Edge.BornInTheSaddle]: BornInTheSaddle,
  [Edge.Champion]: Champion,
  [Edge.Gadgeteer]: Gadgeteer,
  [Edge.HolyWarrior]: HolyWarrior,
  [Edge.Investigator]: Investigator,
  [Edge.JackOfAllTrades]: JackOfAllTrades,
  [Edge.McGyver]: McGyver,
  [Edge.Mentalist]: placeholderEdge,
  [Edge.MrFixIt]: MrFixIt,
  [Edge.SilverTonguedDevil]: SilverTonguedDevil,
  [Edge.SnakeoilSalesman]: SnakeoilSalesman,
  [Edge.TaleTeller]: TaleTeller,
  [Edge.Thief]: Thief,
  [Edge.WildernessMan]: placeholderEdge,
  [Edge.Woodsman]: placeholderEdge,
};

export const EdgeList = Object.values(Edges);
