import { useContext } from "react";
import { styled } from "styled-components";
import {
  getCharacterClass,
  getCharacterFullName,
} from "../character-logic/InfoLogic";
import { Theme } from "../../Theme";
import { StyledLink } from "../../shared/StyledLink";
import { ClickableSurface } from "../../shared/ClickableSurface";
import { CharacterContext } from "../../CharacterContext";

const CharacterInfoWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

const CharacterInfoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const CharacterName = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const CharacterClass = styled.div`
  text-transform: capitalize;
`;

export const CharacterInfo = () => {
  const character = useContext(CharacterContext);

  return (
    <StyledLink to={`/character/sheet/edit/info`}>
      <CharacterInfoWrapper>
        <CharacterInfoStyle>
          <CharacterName>{getCharacterFullName(character)}</CharacterName>
          <CharacterClass>{`${character?.rank?.toLowerCase()} ${getCharacterClass(
            character
          )}`}</CharacterClass>
        </CharacterInfoStyle>
      </CharacterInfoWrapper>
    </StyledLink>
  );
};
