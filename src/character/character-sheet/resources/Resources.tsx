import { useContext } from "react";
import { CharacterContext } from "../../../CharacterContext";
import {
  getTotalPowerPoints,
  shouldShowPowerPoints,
} from "../../character-logic/PowerPointLogic";
import { ResourceCounter } from "./ResourceCounter";
import { css, styled } from "styled-components";
import { StyledLink } from "../../../shared/StyledLink";
import { Theme } from "../../../Theme";
import { ClickableSurface } from "../../../shared/ClickableSurface";
import { maxHealth, maxStamina } from "../../../shared/Constants";
import { TextElement } from "../../../shared/text/Text";
import { TemporaryEffectsRow } from "../../../party/TemporaryEffectsRow";

const ResourcesWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

const ResourcesStyle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 8px;
`;

type ResourceSegmentProps = {
  width?: string;
  $rightAlign?: boolean;
};
const ResourceSegment = styled.div<ResourceSegmentProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${(props) => props.width || "100%"};
  ${(props) =>
    props.$rightAlign &&
    css`
      justify-content: flex-end;
      text-align: right;
    `}
`;

export const Resources = () => {
  const character = useContext(CharacterContext);

  const { wounds, fatigue, currentPowerPoints, temporaryEffects } = character;
  const temporaryEffectsList = Object.values(temporaryEffects ?? {});

  return (
    <StyledLink to={`/character/sheet/edit/resource`}>
      <ResourcesWrapper>
        <ResourcesStyle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ResourceSegment width={"40%"}>
              Health
              <ResourceCounter
                total={maxHealth}
                remaining={maxHealth - wounds}
                noRemainingText="Incapacitated"
                color={Theme.Health}
              />
            </ResourceSegment>
            <ResourceSegment width={"40%"} $rightAlign>
              Stamina
              <ResourceCounter
                total={maxStamina}
                remaining={maxStamina - fatigue}
                noRemainingText="Incapacitated"
                color={Theme.Stamina}
              />
            </ResourceSegment>
          </div>
          {shouldShowPowerPoints(character) ? (
            <ResourceSegment>
              Power Points
              <ResourceCounter
                total={getTotalPowerPoints(character)}
                remaining={currentPowerPoints}
                noRemainingText="Out of Power Points"
                color={Theme.PowerPoints}
              />
            </ResourceSegment>
          ) : null}
          {temporaryEffectsList.length > 0 && (
            <ResourceSegment>
              <TextElement>Temporary Effects</TextElement>
              <TemporaryEffectsRow tempEffects={temporaryEffectsList} />
            </ResourceSegment>
          )}
        </ResourcesStyle>
      </ResourcesWrapper>
    </StyledLink>
  );
};
