import { Edge, EdgeCategory, Rank } from '../../utils/enums';
import { EdgeDetailType } from '../../utils/interfaces/EdgeDetail';
import { Alertness } from './background_edges/Alertness';
import { Ambidextrous } from './background_edges/Ambidextrous';
import { ArcaneBackgroundChiMastery } from './background_edges/ArcaneBackgroundChiMastery';
import { ArcaneBackgroundHexslinger } from './background_edges/ArcaneBackgroundHexslinger';
import { ArcaneBackgroundMagic } from './background_edges/ArcaneBackgroundMagic';
import { ArcaneBackgroundMiracles } from './background_edges/ArcaneBackgroundMiracles';
import { ArcaneBackgroundShamanism } from './background_edges/ArcaneBackgroundShamanism';
import { ArcaneBackgroundWeirdScience } from './background_edges/ArcaneBackgroundWeirdScience';
import { ArcaneResistance } from './background_edges/ArcaneResistance';
import { ArcaneResistanceImproved } from './background_edges/ArcaneResistanceImproved';
import { Attractive } from './background_edges/Attractive';
import { AttractiveVery } from './background_edges/AttractiveVery';
import { Berserk } from './background_edges/Berserk';
import { Brave } from './background_edges/Brave';
import { Brawny } from './background_edges/Brawny';
import { FastHealer } from './background_edges/FastHealer';
import { FleetFooted } from './background_edges/FleetFooted';
import { GallowsHumor } from './background_edges/GallowsHumor';
import { Linguist } from './background_edges/Linguist';
import { Luck } from './background_edges/Luck';
import { LuckGreat } from './background_edges/LuckGreat';
import { Quick } from './background_edges/Quick';
import { Rich } from './background_edges/Rich';
import { RichFilthy } from './background_edges/RichFilthy';
import { BlindFighting } from './combat_edges/BlindFighting';
import { Block } from './combat_edges/Block';
import { BlockImproved } from './combat_edges/BlockImproved';
import { Brawler } from './combat_edges/Brawler';
import { Bruiser } from './combat_edges/Bruiser';
import { CombatReflexes } from './combat_edges/CombatReflexes';
import { Counterattack } from './combat_edges/CounterAttack';
import { CounterAttackImproved } from './combat_edges/CounterAttackImproved';
import { Dodge } from './combat_edges/Dodge';
import { DodgeImproved } from './combat_edges/DodgeImproved';
import { DontGetImRiled } from './combat_edges/DontGetImRiled';
import { Duelist } from './combat_edges/Duelist';
import { Elan } from './combat_edges/Elan';
import { Extraction } from './combat_edges/Extraction';
import { ExtractionImproved } from './combat_edges/ExtractionImproved';
import { FirstStrike } from './combat_edges/FirstStrike';
import { FirstStrikeImproved } from './combat_edges/FirstStrikeImproved';
import { Florentine } from './combat_edges/Florentine';
import { Frenzy } from './combat_edges/Frenzy';
import { FrenzyImproved } from './combat_edges/FrenzyImproved';
import { GiantKiller } from './combat_edges/GiantKiller';
import { HarderToKill } from './combat_edges/HarderToKill';
import { HardToKill } from './combat_edges/HardToKill';
import { HipShooting } from './combat_edges/HipShooting';
import { HipShootingImproved } from './combat_edges/HipShootingImproved';
import { ImprovisationalFighter } from './combat_edges/ImprovisationalFighter';
import { IronParry } from './combat_edges/IronParry';
import { KillerInstinct } from './combat_edges/KillerInstinct';
import { LevelHeaded } from './combat_edges/LevelHeaded';
import { LevelHeadedImproved } from './combat_edges/LevelHeadedImproved';
import { Marksman } from './combat_edges/Marksman';
import { MovementOfTheSerpent } from './combat_edges/MovementOfTheSerpent';
import { NervesOfSteel } from './combat_edges/NervesOfSteel';
import { NervesOfSteelImproved } from './combat_edges/NervesOfSteelImproved';
import { NoMercy } from './combat_edges/NoMercy';
import { Pistolero } from './combat_edges/Pistolero';
import { QuickDraw } from './combat_edges/QuickDraw';
import { RebelYell } from './combat_edges/RebelYell';
import { RockAndRoll } from './combat_edges/RockAndRoll';
import { SpeedLoad } from './combat_edges/SpeedLoad';
import { SteadyHands } from './combat_edges/SteadyHands';
import { Sweep } from './combat_edges/Sweep';
import { SweepImproved } from './combat_edges/SweepImproved';
import { TenTigerPunch } from './combat_edges/TenTigerPunch';
import { TrademarkWeaponFighting } from './combat_edges/TrademarkWeaponFighting';
import { TrademarkWeaponFightingImproved } from './combat_edges/TrademarkWeaponFightingImproved';
import { TrademarkWeaponShooting } from './combat_edges/TrademarkWeaponShooting';
import { TrademarkWeaponShootingImproved } from './combat_edges/TrademarkWeaponShootingImproved';
import { TwoFisted } from './combat_edges/TwoFisted';
import { Alchemy } from './power_edges/Alchemy';
import { BornToKill } from './power_edges/BornToKill';
import { DealersChoice } from './power_edges/DealersChoice';
import { Eureka } from './power_edges/Eureka';
import { NewPower } from './power_edges/NewPower';
import {
    PowerPointsHeroic, PowerPointsLegendary, PowerPointsNovice, PowerPointsSeasoned,
    PowerPointsVeteran
} from './power_edges/PowerPoints';
import { RapidRecharge } from './power_edges/RapidRecharge';
import { RapidRechargeImproved } from './power_edges/RapidRechargeImproved';
import { Acrobat } from './professional_edges/Acrobat';
import { Adept } from './professional_edges/Adept';
import { Assassin } from './professional_edges/Assassin';
import { BornInTheSaddle } from './professional_edges/BornInTheSaddle';
import { Champion } from './professional_edges/Champion';
import { Gadgeteer } from './professional_edges/Gadgeteer';
import { HolyWarrior } from './professional_edges/HolyWarrior';
import { Investigator } from './professional_edges/Investigator';
import { JackOfAllTrades } from './professional_edges/JackOfAllTrades';
import { McGyver } from './professional_edges/McGyver';
import { MrFixIt } from './professional_edges/MrFixIt';
import { SilverTonguedDevil } from './professional_edges/SilverTonguedDevil';
import { SnakeoilSalesman } from './professional_edges/SnakeoilSalesman';
import { Thief } from './professional_edges/Thief';
import { WildernessMan } from './professional_edges/WildernessMan';
import { Woodsman } from './professional_edges/Woodsman';
import { Charismatic } from './social_edges/Charismatic';
import { DangerSense } from './weird_edges/DangerSense';
import { Healer } from './weird_edges/Healer';
import { KnackBornOnAllHallowsEve } from './weird_edges/KnackBornOnAllHallowsEve';

const placeholderEdge = {
  key: Edge.Placeholder,
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
  [Edge.Placeholder]: placeholderEdge,
  // Background Edges
  [Edge.Alertness]: Alertness,
  [Edge.Ambidextrous]: Ambidextrous,
  [Edge.ArcaneBackgroundMagic]: ArcaneBackgroundMagic,
  [Edge.ArcaneBackgroundMiracles]: ArcaneBackgroundMiracles,
  [Edge.ArcaneBackgroundChiMastery]: ArcaneBackgroundChiMastery,
  [Edge.ArcaneBackgroundShamanism]: ArcaneBackgroundShamanism,
  [Edge.ArcaneBackgroundWeirdScience]: ArcaneBackgroundWeirdScience,
  [Edge.ArcaneBackgroundHexslinger]: ArcaneBackgroundHexslinger,

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
  [Edge.BornToKill]: BornToKill,
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
  [Edge.Extraction]: Extraction,
  [Edge.ExtractionImproved]: ExtractionImproved,
  [Edge.FirstStrike]: FirstStrike,
  [Edge.FirstStrikeImproved]: FirstStrikeImproved,
  [Edge.Florentine]: Florentine,
  [Edge.Frenzy]: Frenzy,
  [Edge.FrenzyImproved]: FrenzyImproved,
  [Edge.GiantKiller]: GiantKiller,
  [Edge.HardToKill]: HardToKill,
  [Edge.HarderToKill]: HarderToKill,
  [Edge.HipShooting]: HipShooting,
  [Edge.HipShootingImproved]: HipShootingImproved,
  [Edge.ImprovisationalFighter]: ImprovisationalFighter,
  [Edge.IronParry]: IronParry,
  [Edge.KillerInstinct]: KillerInstinct,
  [Edge.LevelHeaded]: LevelHeaded,
  [Edge.LevelHeadedImproved]: LevelHeadedImproved,
  [Edge.Marksman]: Marksman,
  [Edge.MovementOfTheSerpent]: MovementOfTheSerpent,
  [Edge.NervesOfSteel]: NervesOfSteel,
  [Edge.NervesOfSteelImproved]: NervesOfSteelImproved,
  [Edge.NoMercy]: NoMercy,
  [Edge.Pistolero]: Pistolero,
  [Edge.QuickDraw]: QuickDraw,
  [Edge.RebelYell]: RebelYell,
  [Edge.RockAndRoll]: RockAndRoll,
  [Edge.SpeedLoad]: SpeedLoad,
  [Edge.SteadyHands]: SteadyHands,
  [Edge.Sweep]: Sweep,
  [Edge.SweepImproved]: SweepImproved,
  [Edge.TenTigerPunch]: TenTigerPunch,
  [Edge.TrademarkWeaponFighting]: TrademarkWeaponFighting,
  [Edge.TrademarkWeaponFightingImproved]: TrademarkWeaponFightingImproved,
  [Edge.TrademarkWeaponShooting]: TrademarkWeaponShooting,
  [Edge.TrademarkWeaponShootingImproved]: TrademarkWeaponShootingImproved,
  [Edge.TwoFisted]: TwoFisted,

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
  [Edge.MrFixIt]: MrFixIt,
  [Edge.SilverTonguedDevil]: SilverTonguedDevil,
  [Edge.SnakeoilSalesman]: SnakeoilSalesman,
  [Edge.Thief]: Thief,
  [Edge.WildernessMan]: WildernessMan,
  [Edge.Woodsman]: Woodsman,

  // Social edges
  [Edge.CardSharp]: placeholderEdge,
  [Edge.Charismatic]: Charismatic,
  [Edge.CommonBond]: placeholderEdge,
  [Edge.StrongWilled]: placeholderEdge,
  [Edge.TrueGrit]: placeholderEdge,

  // Weird edges
  [Edge.Conviction]: placeholderEdge,
  [Edge.BeastBond]: placeholderEdge,
  [Edge.BeastMaster]: placeholderEdge,
  [Edge.DangerSense]: DangerSense,
  [Edge.FatesFavored]: placeholderEdge,
  [Edge.Harrowed]: placeholderEdge,
  [Edge.Healer]: Healer,
  [Edge.LiquidCourage]: placeholderEdge,
  [Edge.KnackBastard]: placeholderEdge,
  [Edge.KnackBornOnAllHallowsEve]: KnackBornOnAllHallowsEve,
  [Edge.KnackBornOnChristmas]: placeholderEdge,
  [Edge.KnackBreechBirth]: placeholderEdge,
  [Edge.KnackSeventhSon]: placeholderEdge,
  [Edge.KnackShootingStar]: placeholderEdge,
  [Edge.KnackSpiritTouched]: placeholderEdge,
  [Edge.KnackStormBorn]: placeholderEdge,
  [Edge.MasterCrafter]: placeholderEdge,
  [Edge.NoseForTheRock]: placeholderEdge,
  [Edge.PatronSpirit]: placeholderEdge,
  [Edge.Scavenger]: placeholderEdge,
  [Edge.SeenTheElephant]: placeholderEdge,
  [Edge.TotemSpirit]: placeholderEdge,

  // Wild card edegs
  [Edge.DeadShot]: placeholderEdge,
  [Edge.MightyBlow]: placeholderEdge,
  [Edge.PowerSurge]: placeholderEdge,

  // Legendary edges
  [Edge.BeholdAPaleHorse]: placeholderEdge,
  [Edge.Damned]: placeholderEdge,
  [Edge.FastAsLightning]: placeholderEdge,
  [Edge.Professional]: placeholderEdge,
  [Edge.Expert]: placeholderEdge,
  [Edge.Master]: placeholderEdge,
  [Edge.RightHandOfTheDevilFighting]: placeholderEdge,
  [Edge.RightHandOfTheDevilShooting]: placeholderEdge,
  [Edge.ToughAsNails]: placeholderEdge,
  [Edge.ToughAsNailsImproved]: placeholderEdge,
  [Edge.WeaponMaster]: placeholderEdge,
  [Edge.MasterOfArms]: placeholderEdge,

  [Edge.DealersChoice]: DealersChoice,
  [Edge.HighRoller]: placeholderEdge,
  [Edge.ImprovedHighRoller]: placeholderEdge,
  [Edge.OldHand]: placeholderEdge,
  [Edge.WhateleyBlood]: placeholderEdge,

  [Edge.FetishCreator]: placeholderEdge,
  [Edge.SpiritsFavor]: placeholderEdge,

  [Edge.Alchemy]: Alchemy,
  [Edge.Eureka]: Eureka,
};

export const EdgeList = Object.values(Edges);
