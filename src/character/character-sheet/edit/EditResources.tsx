import { useContext } from "react";
import Page from "../../../shared/page/Page";
import CharacterSheet from "../CharacterSheet";
import { ResourceCounter } from "../resources/ResourceCounter";
import { CharacterContext } from "../../../DeadlandsCompanion";
import {
  getMaxPowerPoints,
  shouldShowPowerPoints,
} from "../../character-logic/PowerPointLogic";
import { styled } from "styled-components";
import { database } from "../../../utils/firebase/Firebase";
import { ref, set } from "firebase/database";
import { IconButton } from "../../../shared/buttons/IconButton";
import { Icons } from "../../../icons/Icons";

const ResourceSegment = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`;

type ChangeResourceInput = {
  characterKey: string;
  resource: number;
};
const changeWounds = ({ characterKey, resource }: ChangeResourceInput) => {
  const db = database;
  set(ref(db, `characters/${characterKey}/wounds`), resource);
};

const changeFatigue = ({ characterKey, resource }: ChangeResourceInput) => {
  const db = database;
  set(ref(db, `characters/${characterKey}/fatigue`), resource);
};

const changeCurrentPowerPoints = ({
  characterKey,
  resource,
}: ChangeResourceInput) => {
  const db = database;
  set(ref(db, `characters/${characterKey}/currentPowerPoints`), resource);
};

export const EditResources = () => {
  const character = useContext(CharacterContext);

  if (!character) return null;
  const { id, wounds, fatigue, currentPowerPoints } = character;
  const maxHealth = 4;
  const maxStamina = 3;

  const showPowerPoints = shouldShowPowerPoints(character);
  const maxPowerPoints = getMaxPowerPoints(character);

  const updateWounds = (newRemainingHealth: number) => {
    const newWounds = maxHealth - newRemainingHealth;
    changeWounds({ characterKey: id, resource: newWounds });
  };

  const updateFatigue = (newRemainingStamina: number) => {
    const newFatigue = maxStamina - newRemainingStamina;
    changeFatigue({ characterKey: id, resource: newFatigue });
  };

  const updatePowerPoints = (newCurrentPowerPoints: number) => {
    changeCurrentPowerPoints({
      characterKey: id,
      resource: newCurrentPowerPoints,
    });
  };

  const fullRest = () => {
    updateWounds(maxHealth);
    updateFatigue(maxStamina);
    updatePowerPoints(maxPowerPoints);
  };

  return (
    <Page pageName="Recharge" prevLocation={CharacterSheet.Location}>
      <ResourceSegment>
        Health
        <ResourceCounter
          total={maxHealth}
          remaining={maxHealth - wounds}
          color={"#9C2542"}
          onResourceSegmentClick={updateWounds}
        />
      </ResourceSegment>
      <ResourceSegment>
        Stamina
        <ResourceCounter
          total={maxStamina}
          remaining={maxStamina - fatigue}
          color={"#319177"}
          onResourceSegmentClick={updateFatigue}
        />
      </ResourceSegment>
      {showPowerPoints ? (
        <ResourceSegment>
          Power Points:
          <ResourceCounter
            total={maxPowerPoints}
            remaining={currentPowerPoints}
            color={"#2E5894"}
            onResourceSegmentClick={updatePowerPoints}
          />
        </ResourceSegment>
      ) : null}
      <IconButton
        icon={Icons.Campfire}
        viewbox="0 0 1080 1296"
        onClick={fullRest}
        text="Full Rest"
      ></IconButton>
    </Page>
  );
};
