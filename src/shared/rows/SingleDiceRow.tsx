import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { DieType } from "../../utils/enums";
import { DiceIcon } from "../../icons/DiceIcons";
import { StyledLink } from "../StyledLink";

const SingleDiceRowWrapper = styled.div`
  border-bottom: 1px solid ${Theme.Surface[400]};
  padding-bottom: 8px;
  margin-bottom: 8px;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;
const SingleDiceRowStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type SingleDiceRowProps = {
  label: string;
  dieType: DieType;
};
export const SingleDiceRow = ({ label, dieType }: SingleDiceRowProps) => {
  return (
    <SingleDiceRowWrapper key={label}>
      <StyledLink to={`roll/${label}`}>
        <SingleDiceRowStyle>
          {label}:
          <DiceIcon size={30} dieType={dieType} />
        </SingleDiceRowStyle>
      </StyledLink>
    </SingleDiceRowWrapper>
  );
};
