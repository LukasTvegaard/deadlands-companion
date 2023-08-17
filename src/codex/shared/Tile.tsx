import styled from "styled-components";
import { StyledLink } from "../../shared/StyledLink";
import { Theme } from "../../Theme";

const TileStyle = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.Surface[400]};
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  background-color: ${Theme.Surface[300]};
  gap: 8px;
  @media (min-width: 769px) {
    max-width: 450px;
  }
`;

type TileTitleProps = {
  $isNegative?: boolean;
};
const TileTitle = styled.div<TileTitleProps>`
  font-weight: 400;
  font-size: 18px;
  color: ${(props) =>
    props.$isNegative ? Theme.Error[300] : Theme.Primary[600]};
`;

const TileDescription = styled.div`
  font-size: 16px;
`;

const TileRequirements = styled.div`
  color: ${Theme.Mixed[600]};
`;

type TileProps = {
  link: string;
  name: string;
  description: string;
  requirements?: string;
  isNegative?: boolean;
};
export const Tile = ({
  link,
  name,
  description,
  requirements,
  isNegative,
}: TileProps) => {
  return (
    <TileStyle to={`${link}`}>
      <TileTitle $isNegative={isNegative}>{name}</TileTitle>
      <TileDescription>{description}</TileDescription>
      {requirements ? <TileRequirements>Requirements</TileRequirements> : null}
    </TileStyle>
  );
};
