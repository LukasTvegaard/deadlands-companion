import { useContext } from "react";
import { styled } from "styled-components";
import { CharacterContext } from "../../DeadlandsCompanion";
import {
  getCharacterClass,
  getCharacterFullName,
} from "../character-logic/InfoLogic";
import { Theme } from "../../Theme";
import { StyledLink } from "../../shared/StyledLink";
import { Locationable } from "../../utils/Location";
import { ClickableSurface } from "../../shared/ClickableSurface";

const CharacterInfoStyle = styled.div`
  ${ClickableSurface}
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

const CharacterName = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const CharacterClass = styled.div`
  text-transform: capitalize;
`;

interface CharacterInfoProps extends Locationable {}

export const CharacterInfo = ({ locationKey }: CharacterInfoProps) => {
  const character = useContext(CharacterContext);

  return (
    <StyledLink to={`/character/sheet/edit/info`}>
      <CharacterInfoStyle>
        <CharacterName>{getCharacterFullName(character)}</CharacterName>
        <CharacterClass>{`${character?.rank?.toLowerCase()} ${getCharacterClass(
          character
        )}`}</CharacterClass>
      </CharacterInfoStyle>
    </StyledLink>
  );
};
