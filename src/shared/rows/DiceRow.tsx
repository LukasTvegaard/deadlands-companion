import { styled } from "styled-components";

import { DiceIcon } from "../../icons/DiceIcons";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { Icons } from "../../icons/Icons";
import { IconButton } from "../buttons/IconButton";
import { RowStyle } from "./Row.styled";
import { getBaseModifierFromDieType } from "../../character/character-logic/roll-logic/DieLogic";

const DiceButtonStyle = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const DiceButtonSeparator = styled.div`
  border-right: 1px solid ${Theme.Surface[400]};
  margin: 8px;
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
        size={36}
        dieType={dieType}
        modifier={getBaseModifierFromDieType(dieType)}
        color={isActive ? Theme.Primary[100] : undefined}
      />
    </DiceButtonStyle>
  );
};

const DiceButtonRow = ({ activeDieType, onDiceClick }: DiceButtonRowProps) => {
  return (
    <div style={{ display: "flex", gap: "6px" }}>
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D4}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D6}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D8}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D10}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D12}
      />
      <DiceButtonSeparator />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D13}
      />
      <DiceButton
        onDiceClick={onDiceClick}
        activeDieType={activeDieType}
        dieType={DieType.D14}
      />
    </div>
  );
};

interface DiceRowProps extends DiceButtonRowProps {
  label: string;
  onDeleteClick?: () => void;
}
export const DiceRow = ({
  label,
  activeDieType,
  onDiceClick,
  onDeleteClick,
}: DiceRowProps) => {
  return (
    <RowStyle>
      <div>{label}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DiceButtonRow
          activeDieType={activeDieType}
          onDiceClick={onDiceClick}
        />
        {onDeleteClick ? (
          <IconButton
            transparent
            onClick={onDeleteClick}
            color={Theme.Error[100]}
            icon={Icons.TrashCan}
          />
        ) : null}
      </div>
    </RowStyle>
  );
};
