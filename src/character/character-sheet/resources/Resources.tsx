import { useContext } from "react";
import { CharacterContext } from "../../../DeadlandsCompanion";
import {
  getMaxPowerPoints,
  shouldShowPowerPoints,
} from "../../character-logic/PowerPointLogic";
import { ResourceCounter } from "./ResourceCounter";
import { css, styled } from "styled-components";
import { StyledLink } from "../../../shared/StyledLink";

type ResourceSegmentProps = {
  width?: string;
  $rightAlign?: boolean;
};
const ResourceSegment = styled.div<ResourceSegmentProps>`
  display: flex;
  flex-direction: column;
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

  if (!character) return null;
  const { wounds, fatigue, currentPowerPoints } = character;

  const maxHealth = 4;
  const maxStamina = 3;

  return (
    <StyledLink to={"edit/resource"}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ResourceSegment width={"40%"}>
          Health
          <ResourceCounter
            total={maxHealth}
            remaining={maxHealth - wounds}
            noRemainingText="Incapacitated"
            color={"#9C2542"}
          />
        </ResourceSegment>
        <ResourceSegment width={"40%"} $rightAlign>
          Stamina
          <ResourceCounter
            total={maxStamina}
            remaining={maxStamina - fatigue}
            noRemainingText="Incapacitated"
            color={"#319177"}
          />
        </ResourceSegment>
      </div>
      {shouldShowPowerPoints(character) ? (
        <ResourceSegment>
          Power Points:
          <ResourceCounter
            total={getMaxPowerPoints(character)}
            remaining={currentPowerPoints}
            noRemainingText="Out of Power Points"
            color={"#2E5894"}
          />
        </ResourceSegment>
      ) : null}
    </StyledLink>
  );
};
