import { styled } from "styled-components";
import { Character } from "../utils/types/Character";
import { Theme } from "../Theme";
import { Edges } from "../static/edges/EdgeList";

const getCharacterClass = (character: Character): string => {
  if (character.edges) {
    for (const edge of Object.keys(character.edges)) {
      switch (edge) {
        case Edges.ArcaneBackgroundWeirdScience.key:
          return "Weird Scientist";
        case Edges.ArcaneBackgroundMagic.key:
          return "Huckster";
        case Edges.ArcaneBackgroundChiMastery.key:
          return "Martial Artist";
        case Edges.ArcaneBackgroundShamanism.key:
          return "Shaman";
        case Edges.ArcaneBackgroundMiracles.key:
          return "Blessed";
      }
    }
  }

  return "Gunslinger";
};

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
      <CharacterName>{`${character.firstName} ${character.lastName}`}</CharacterName>
      <CharacterClass>{`${character.rank.toLowerCase()} ${getCharacterClass(
        character
      )}`}</CharacterClass>
      <PartyName>Party Name</PartyName> {/* FIXME: Insert party name */}
    </CharacterTileStyle>
  );
};
