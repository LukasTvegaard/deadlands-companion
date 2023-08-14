import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { DiceIcon } from "../../icons/DiceIcons";

const SingleRowWrapper = styled.div`
  border-top: 1px solid ${Theme.Surface[400]};
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
  modifier?: number;
};
export const SingleDiceRow = ({
  label,
  dieType,
  modifier,
}: SingleDiceRowProps) => {
  return (
    <SingleRowWrapper key={label}>
      <SingleDiceRowStyle>
        {label}:
        <DiceIcon size={30} dieType={dieType} modifier={modifier} />
      </SingleDiceRowStyle>
    </SingleRowWrapper>
  );
};

type SingleValueRowProps = {
  label: string;
  value: number;
};
export const SingleValueRow = ({ label, value }: SingleValueRowProps) => {
  return (
    <SingleRowWrapper key={label}>
      <SingleRowStyle>
        {label}:<div>{value}</div>
      </SingleRowStyle>
    </SingleRowWrapper>
  );
};
