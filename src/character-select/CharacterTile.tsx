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
`;

const CharacterName = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

const CharacterClass = styled.div`
  text-transform: capitalize;
`;

const PartyName = styled.div`
  color: ${Theme.Mixed[600]};
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
      <CharacterClass>{`${character.rank?.toLowerCase()} ${getCharacterClass(
        character
      )}`}</CharacterClass>
      <PartyName>Party Name</PartyName> {/* FIXME: Insert party name */}
    </CharacterTileStyle>
  );
};
