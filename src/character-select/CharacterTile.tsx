import { styled } from "styled-components";
import { Character } from "../utils/types/Character";
import { Theme } from "../Theme";
import {
  getCharacterClass,
  getCharacterFullName,
} from "../character/character-logic/InfoLogic";

const CharacterTileStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid ${Theme.Surface[400]};
  border-radius: 4px;
  padding: 8px;
  background-color: ${Theme.Surface[300]};
  gap: 8px;
  cursor: pointer;
`;

const CharacterName = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const DMLabel = styled.div`
  margin-right: auto;
  background-color: ${Theme.Secondary[200]};
  padding: 4px;
  border-radius: 8px;
`;

const CharacterClass = styled.div`
  text-transform: capitalize;
`;

type CharacterTileProps = {
  characterKey: string | null;
  character: Character;
  setSelectedCharacterId: (characterId: string | null) => void;
};
export const CharacterTile = ({
  characterKey,
  character,
  setSelectedCharacterId,
}: CharacterTileProps) => {
  return (
    <CharacterTileStyle
      key={characterKey}
      onClick={() => setSelectedCharacterId(characterKey)}
    >
      <CharacterName>{getCharacterFullName(character)}</CharacterName>
      {character.isDM ? (
        <DMLabel>DM</DMLabel>
      ) : (
        <CharacterClass>{`${character.rank?.toLowerCase()} ${getCharacterClass(
          character
        )}`}</CharacterClass>
      )}
    </CharacterTileStyle>
  );
};
