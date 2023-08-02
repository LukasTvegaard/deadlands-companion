import { useContext } from "react";
import { CharacterContext } from "../../../DeadlandsCompanion";
import {
  getMaxPowerPoints,
  shouldShowPowerPoints,
} from "../../character-logic/PowerPointLogic";
import { ResourceCounter } from "./ResourceCounter";
import { css, styled } from "styled-components";
import { StyledLink, getPrevLocationQuery } from "../../../shared/StyledLink";
import { Locationable } from "../../../utils/Location";
import { Theme } from "../../../Theme";

const ResourcesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${Theme.Surface[300]};
`;

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

interface ResourcesProps extends Locationable {}
export const Resources = ({ locationKey }: ResourcesProps) => {
  const character = useContext(CharacterContext);

  const { wounds, fatigue, currentPowerPoints } = character;

  const maxHealth = 4;
  const maxStamina = 3;

  return (
    <StyledLink
      to={`/character/sheet/edit/resource${getPrevLocationQuery(locationKey)}`}
    >
      <ResourcesStyle>
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
      </ResourcesStyle>
    </StyledLink>
  );
};
