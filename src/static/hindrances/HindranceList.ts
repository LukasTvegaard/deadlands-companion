import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { AbsentMinded } from "./AbsentMinded";
import { AilinMajor } from "./AilinMajor";
import { AilinMinor } from "./AilinMinor";
import { AllThumbs } from "./AllThumbs";
import { Arrogant } from "./Arrogant";
import { BadDreamsMajor } from "./BadDreamsMajor";
import { BadDreamsMinor } from "./BadDreamsMinor";
import { BadEyes } from "./BadEyes";
import { BadLuck } from "./BadLuck";
import { BigMouth } from "./BigMouth";
import { Blind } from "./Blind";
import { Bloodthirsty } from "./Bloodthirsty";
import { Cautious } from "./Cautious";
import { Clueless } from "./Clueless";
import { CodeOfHonor } from "./CodeOfHonor";
import { Curious } from "./Curious";
import { Cursed } from "./Cursed";
import { DeathWIsh } from "./DeathWish";
import { DelusionalMajor } from "./DelusionalMajor";
import { DelusionalMinor } from "./DelusionalMinor";
import { Eccentricity } from "./Eccentricity";
import { Elderly } from "./Elderly";
import { EnemyMajor } from "./EnemyMajor";
import { EnemyMinor } from "./EnemyMinor";
import { FocusMajor } from "./FocusMajor";
import { FocusMinor } from "./FocusMinor";
import { GreedyMajor } from "./GreedyMajor";
import { GreedyMinor } from "./GreedyMinor";
import { GrimServant } from "./GrimServant";
import { HabitMajor } from "./HabitMajor";
import { HabitMinor } from "./HabitMinor";
import { HardOfHearingMajor } from "./HardOfHearingMajor";
import { HardOfHearingMinor } from "./HardOfHearingMinor";
import { HeavySleeper } from "./HeavySleeper";
import { Heroic } from "./Heroic";
import { Illiterate } from "./Illiterate";
import { Lame } from "./Lame";
import { Loyal } from "./Loyal";
import { LyingEyes } from "./LyingEyes";
import { Mean } from "./Mean";
import { Obese } from "./Obese";
import { OldWaysOathMajor } from "./OldWaysOathMajor";
import { OldWaysOathMinor } from "./OldWaysOathMinor";
import { OneArm } from "./OneArm";
import { OneEye } from "./OneEye";
import { OneLeg } from "./OneLeg";
import { Outsider } from "./Outsider";
import { Overconfident } from "./Overconfident";
import { PacifistMajor } from "./PacifistMajor";
import { PacifistMinor } from "./PacifistMinor";
import { PhobiaMajor } from "./PhobiaMajor";
import { PhobiaMinor } from "./PhobiaMinor";
import { Poverty } from "./Poverty";
import { Quirk } from "./Quirk";
import { Slowpoke } from "./Slowpoke";
import { Small } from "./Small";
import { Stubborn } from "./Stubborn";
import { Tenderfoot } from "./Tenderfoot";
import { ThinSkinned } from "./ThinSkinned";
import { TroubleMagnet } from "./TroubleMagnet";
import { Ugly } from "./Ugly";
import { VengefulMajor } from "./VengefulMajor";
import { VengefulMinor } from "./VengefulMinor";
import { Vow } from "./Vow";
import { WantedMajor } from "./WantedMajor";
import { WantedMinor } from "./WantedMinor";
import { Yellow } from "./Yellow";
import { Young } from "./Young";

export type HindranceDetails = {
  [key in Hindrance]: HindranceDetailType;
};
export const Hindrances: HindranceDetails = {
  // Background Edges
  [Hindrance.AbsentMinded]: AbsentMinded,
  [Hindrance.AilinMajor]: AilinMajor,
  [Hindrance.AilinMinor]: AilinMinor,
  [Hindrance.AllThumbs]: AllThumbs,
  [Hindrance.Arrogant]: Arrogant,
  [Hindrance.BadDreamsMajor]: BadDreamsMajor,
  [Hindrance.BadDreamsMinor]: BadDreamsMinor,
  [Hindrance.BadEyes]: BadEyes,
  [Hindrance.BadLuck]: BadLuck,
  [Hindrance.BigMouth]: BigMouth,
  [Hindrance.Blind]: Blind,
  [Hindrance.Bloodthirsty]: Bloodthirsty,
  [Hindrance.Cautious]: Cautious,
  [Hindrance.Clueless]: Clueless,
  [Hindrance.CodeOfHonor]: CodeOfHonor,
  [Hindrance.Curious]: Curious,
  [Hindrance.Cursed]: Cursed,
  [Hindrance.DeathWish]: DeathWIsh,
  [Hindrance.DelusionalMajor]: DelusionalMajor,
  [Hindrance.DelusionalMinor]: DelusionalMinor,
  [Hindrance.Eccentricity]: Eccentricity,
  [Hindrance.Elderly]: Elderly,
  [Hindrance.EnemyMajor]: EnemyMajor,
  [Hindrance.EnemyMinor]: EnemyMinor,
  [Hindrance.FocusMajor]: FocusMajor,
  [Hindrance.FocusMinor]: FocusMinor,
  [Hindrance.GrimServant]: GrimServant,
  [Hindrance.GreedyMajor]: GreedyMajor,
  [Hindrance.GreedyMinor]: GreedyMinor,
  [Hindrance.HabitMajor]: HabitMajor,
  [Hindrance.HabitMinor]: HabitMinor,
  [Hindrance.HardOfHearingMajor]: HardOfHearingMajor,
  [Hindrance.HardOfHearingMinor]: HardOfHearingMinor,
  [Hindrance.HeavySleeper]: HeavySleeper,
  [Hindrance.Heroic]: Heroic,
  [Hindrance.Illiterate]: Illiterate,
  [Hindrance.Lame]: Lame,
  [Hindrance.Loyal]: Loyal,
  [Hindrance.LyingEyes]: LyingEyes,
  [Hindrance.Mean]: Mean,
  [Hindrance.Obese]: Obese,
  [Hindrance.OldWaysOathMajor]: OldWaysOathMajor,
  [Hindrance.OldWaysOathMinor]: OldWaysOathMinor,
  [Hindrance.OneArm]: OneArm,
  [Hindrance.OneEye]: OneEye,
  [Hindrance.OneLeg]: OneLeg,
  [Hindrance.Outsider]: Outsider,
  [Hindrance.Overconfident]: Overconfident,
  [Hindrance.PacifistMajor]: PacifistMajor,
  [Hindrance.PacifistMinor]: PacifistMinor,
  [Hindrance.PhobiaMajor]: PhobiaMajor,
  [Hindrance.PhobiaMinor]: PhobiaMinor,
  [Hindrance.Poverty]: Poverty,
  [Hindrance.Quirk]: Quirk,
  [Hindrance.Slowpoke]: Slowpoke,
  [Hindrance.Small]: Small,
  [Hindrance.Stubborn]: Stubborn,
  [Hindrance.Tenderfoot]: Tenderfoot,
  [Hindrance.ThinSkinned]: ThinSkinned,
  [Hindrance.TroubleMagnet]: TroubleMagnet,
  [Hindrance.Ugly]: Ugly,
  [Hindrance.VengefulMajor]: VengefulMajor,
  [Hindrance.VengefulMinor]: VengefulMinor,
  [Hindrance.Vow]: Vow,
  [Hindrance.WantedMajor]: WantedMajor,
  [Hindrance.WantedMinor]: WantedMinor,
  [Hindrance.Yellow]: Yellow,
  [Hindrance.Young]: Young,
};

export const HindranceList = Object.values(Hindrances);
