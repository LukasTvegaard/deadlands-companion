import { Hindrance } from "../enums/Hindrance";
import { Effecting } from "../types/Effect";

export interface HindranceDetailType extends Effecting {
  key: Hindrance;
  name: string;
  description: string;
  description_short: string;
}
