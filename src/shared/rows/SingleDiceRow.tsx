import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { DiceIcon } from "../../icons/DiceIcons";

type SingleRowWrapperProps = {
  $noBorder?: boolean;
};
const SingleRowWrapper = styled.div<SingleRowWrapperProps>`
  border-top: ${({ $noBorder }) =>
    $noBorder ? "none" : `1px solid ${Theme.Surface[400]}`};
`;

const SingleDiceRowStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const SingleRowStyle = styled(SingleDiceRowStyle)`
  padding-right: 18px;
  height: 30px;
`;

type SingleDiceRowProps = {
  label: string;
  dieType: DieType;
  noBorder?: boolean;
  modifier?: number;
};
export const SingleDiceRow = ({
  label,
  dieType,
  noBorder,
  modifier,
}: SingleDiceRowProps) => {
  return (
    <SingleRowWrapper key={label} $noBorder={noBorder}>
      <SingleDiceRowStyle>
        {label}:
        <DiceIcon size={30} dieType={dieType} modifier={modifier} />
      </SingleDiceRowStyle>
    </SingleRowWrapper>
  );
};

type SingleValueRowProps = {
  label: string;
  value: number | string;
  noBorder?: boolean;
};
export const SingleValueRow = ({
  label,
  value,
  noBorder,
}: SingleValueRowProps) => {
  return (
    <SingleRowWrapper key={label} $noBorder={noBorder}>
      <SingleRowStyle>
        {label}:<div>{value}</div>
      </SingleRowStyle>
    </SingleRowWrapper>
  );
};
