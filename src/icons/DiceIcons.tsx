import { styled } from "styled-components";
import { DieType } from "../utils/enums";
import { Icon } from "./Icon";
import { Icons } from "./Icons";

const diceIconFromDieType = (dieType: DieType) => {
  switch (dieType) {
    case DieType.D2:
    case DieType.D4:
      return Icons.D4;
    case DieType.D6:
      return Icons.D6;
    case DieType.D8:
      return Icons.D8;
    case DieType.D10:
      return Icons.D10;
    case DieType.D12:
    case DieType.D13:
    case DieType.D14:
      return Icons.D12;
  }
};

const DiceIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

type DiceIconProps = {
  dieType: DieType;
  modifier?: number;
  size?: number;
  color?: string;
};
export const DiceIcon = ({
  size = 24,
  dieType,
  modifier,
  color,
}: DiceIconProps) => {
  return (
    <DiceIconWrapper>
      <Icon
        icon={diceIconFromDieType(dieType)}
        width={size}
        height={size}
        color={color}
        viewbox="0 0 24 24"
      />
      {modifier && modifier !== 0 ? (
        <div>
          {modifier > 0 ? "+" : null}
          {modifier}
        </div>
      ) : null}
    </DiceIconWrapper>
  );
};
