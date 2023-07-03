import { styled } from "styled-components";

import { DiceIcon } from "../icons/DiceIcons";
import { Theme } from "../Theme";
import { DieType } from "../utils/enums";

const DiceButtonStyle = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

type DiceButtonRowProps = {
  activeDieType: DieType;
  onDiceClick: (dieType: DieType) => void;
};

interface DiceButtonProps extends DiceButtonRowProps {
  dieType: DieType;
}
const DiceButton = ({
  dieType,
  activeDieType,
  onDiceClick,
}: DiceButtonProps) => {
  const isActive = activeDieType === dieType;
  return (
    <DiceButtonStyle onClick={() => onDiceClick(dieType)}>
      <DiceIcon
        size={48}
        dieType={dieType}
        color={isActive ? Theme.Primary[100] : undefined}
      />
    </DiceButtonStyle>
  );
};

export const DiceButtonRow = ({
  activeDieType,
  onDiceClick,
}: DiceButtonRowProps) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.d4}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.d6}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.d8}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.d10}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.d12}
      />
    </div>
  );
};
