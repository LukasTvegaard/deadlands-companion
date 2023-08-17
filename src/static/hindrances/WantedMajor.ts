import { Hindrance } from "../../utils/enums/Hindrance";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";

export const WantedMajor: HindranceDetailType = {
  key: Hindrance.WantedMajor,
  name: "Wanted (Major)",
  description:
    "Somewhere in America, the law is after you. There is a bounty of 1d6 x $1000 on your head, dead or alive. The nature of the crime and the Marshal's sense of 'sport' determines how far and wide the charges may have circulated, but someone somewhere is looking for you.",
  description_short: "1d6 x $1000 bounty on your head.",
  effects: [],
};
