import { DieType } from "../utils/enums";
import { Icon } from "./Icon";
import { Icons } from "./Icons";

const diceIconFromDieType = (dieType: DieType) => {
  switch (dieType) {
    case DieType.d4:
      return Icons.D4;
    case DieType.d6:
      return Icons.D6;
    case DieType.d8:
      return Icons.D8;
    case DieType.d10:
      return Icons.D10;
    case DieType.d12:
      return Icons.D12;
  }
};

type DiceIconProps = {
  dieType: DieType;
  size?: number;
  color?: string;
};
export const DiceIcon = ({ size = 24, dieType, color }: DiceIconProps) => {
  return (
    <Icon
      icon={diceIconFromDieType(dieType)}
      width={size}
      height={size}
      color={color}
      viewbox="0 0 24 24"
    />
  );
};
