import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { DiceIcon } from "../../icons/DiceIcons";

const SingleDiceRowWrapper = styled.div`
  border-bottom: 1px solid ${Theme.Surface[400]};
  &:last-child {
    border-bottom: none;
  }
`;
const SingleDiceRowStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

type SingleDiceRowProps = {
  label: string;
  dieType: DieType;
  modifier?: number;
};
export const SingleDiceRow = ({
  label,
  dieType,
  modifier,
}: SingleDiceRowProps) => {
  return (
    <SingleDiceRowWrapper key={label}>
      <SingleDiceRowStyle>
        {label}:
        <DiceIcon size={30} dieType={dieType} modifier={modifier} />
      </SingleDiceRowStyle>
    </SingleDiceRowWrapper>
  );
};
