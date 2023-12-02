import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { PowerPointCounter } from "./PowerPointCounter";
import { PowerVariants } from "./PowerVariants";

const PowerRowStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px;
  background-color: ${Theme.Surface[250]};
  border-radius: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${Theme.Surface[300]};
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

type PowerRowProps = {
  powerDetail: PowerDetailType;
  isWeirdScientist: boolean;
};
export const PowerRow = ({ isWeirdScientist, powerDetail }: PowerRowProps) => {
  return (
    <PowerRowStyle>
      <Title>{powerDetail.name}</Title>
      {isWeirdScientist ? (
        <PowerPointCounter powerDetail={powerDetail}></PowerPointCounter>
      ) : null}

      <PowerVariants
        powerDetail={powerDetail}
        isWeirdScientist={isWeirdScientist}
      />
    </PowerRowStyle>
  );
};
