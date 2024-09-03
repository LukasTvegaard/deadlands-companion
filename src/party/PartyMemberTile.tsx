import styled, { css } from "styled-components";
import { Character } from "../utils/types/Character";
import { Theme } from "../Theme";
import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { ResourceCounter } from "../character/character-sheet/resources/ResourceCounter";
import { maxHealth, maxStamina } from "../shared/Constants";
import {
  getMaxPowerPoints,
  shouldShowPowerPoints,
} from "../character/character-logic/PowerPointLogic";
import { StyledLink } from "../shared/StyledLink";
import { TextElement } from "../shared/text/Text";
import { FlexRow } from "../codex/shared/FlexRow";
import { TemporaryEffect } from "../utils/types/TemporaryEffect";
import { TemporaryEffectsRow } from "./TemporaryEffectsRow";

type PartyMemberTileStyleProps = {
  $clickable: boolean;
};
const PartyMemberTileStyle = styled.div<PartyMemberTileStyleProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.Surface[400]};
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  background-color: ${Theme.Surface[300]};
  gap: 8px;
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${Theme.Surface[400]};
      }
    `}
`;

type PartyMemberTileProps = {
  character: Character;
  isDM: boolean;
};
const compareEffects = (a: TemporaryEffect, b: TemporaryEffect) => {
  if (a.duration === b.duration) {
    return a.name.localeCompare(b.name);
  }
  return a.duration - b.duration;
};
const InnerTile = ({ character, isDM }: PartyMemberTileProps) => {
  const tempEffects = Object.values(character.temporaryEffects ?? {}).toSorted(
    compareEffects
  );

  return (
    <PartyMemberTileStyle $clickable={isDM}>
      <FlexRow>
        <TextElement>{getCharacterFullName(character)}</TextElement>
      </FlexRow>
      <ResourceCounter
        total={maxHealth}
        remaining={maxHealth - character.wounds}
        noRemainingText="Incapacitated"
        color={Theme.Health}
      />
      <ResourceCounter
        total={maxStamina}
        remaining={maxStamina - character.fatigue}
        noRemainingText="Incapacitated"
        color={Theme.Stamina}
      />
      {shouldShowPowerPoints(character) ? (
        <ResourceCounter
          total={getMaxPowerPoints(character)}
          remaining={character.currentPowerPoints}
          noRemainingText="Out of Power Points"
          color={Theme.PowerPoints}
        />
      ) : null}
      {tempEffects.length > 0 && (
        <>
          <TextElement>Temporary Effects</TextElement>
          <TemporaryEffectsRow tempEffects={tempEffects} />{" "}
        </>
      )}
    </PartyMemberTileStyle>
  );
};

export const PartyMemberTile = ({ character, isDM }: PartyMemberTileProps) => {
  if (!isDM) {
    return (
      <div>
        <InnerTile character={character} isDM={isDM} />
      </div>
    );
  }
  return (
    <StyledLink to={`${character.id}/resource`}>
      <InnerTile character={character} isDM={isDM} />
    </StyledLink>
  );
};
