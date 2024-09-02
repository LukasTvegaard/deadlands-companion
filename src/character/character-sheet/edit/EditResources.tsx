import { ref, set } from "firebase/database";
import { useContext, useState } from "react";
import { styled } from "styled-components";

import { CharacterContext } from "../../../DeadlandsCompanion";
import { Icons } from "../../../icons/Icons";
import { IconButton } from "../../../shared/buttons/IconButton";
import Page from "../../../shared/page/Page";
import { database } from "../../../utils/firebase/Firebase";
import { Locations } from "../../../utils/Location";
import {
  getMaxPowerPoints,
  shouldShowPowerPoints,
} from "../../character-logic/PowerPointLogic";
import { ResourceCounter } from "../resources/ResourceCounter";
import { useParams } from "react-router-dom";
import { Theme } from "../../../Theme";
import { Character } from "../../../utils/types/Character";
import { useObject } from "react-firebase-hooks/database";
import { snapshotToValue } from "../../../utils/firebase/SnapshotFormatter";
import { Button } from "../../../shared/buttons/Button";
import { AddBuffModal } from "./AddBuffModal";
import { addTemporaryEffect } from "../../../services/temporary-effects-service";
import { FlexRow } from "../../../codex/shared/FlexRow";

const ResourceSegment = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`;

const ButtonCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

type ChangeResourceInput = {
  characterKey: string;
  resource: number;
};
const changeWounds = ({ characterKey, resource }: ChangeResourceInput) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/wounds`), resource);
};

const changeFatigue = ({ characterKey, resource }: ChangeResourceInput) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/fatigue`), resource);
};

const changeCurrentPowerPoints = ({
  characterKey,
  resource,
}: ChangeResourceInput) => {
  const db = database();
  set(ref(db, `characters/${characterKey}/currentPowerPoints`), resource);
};

export const EditResources = () => {
  const loggedInCharacter = useContext(CharacterContext);
  const routeParams = useParams();
  const [showAddBuffModal, setShowAddBuffModal] = useState(false);
  const characterQuery =
    loggedInCharacter.isDM && routeParams.id
      ? ref(database(), `characters/${routeParams.id}`)
      : null;
  const [characterSnapshot, loading] = useObject(characterQuery);
  const character =
    characterSnapshot && !loading
      ? snapshotToValue<Character>(characterSnapshot)
      : loggedInCharacter;

  const { id, wounds, fatigue, currentPowerPoints, temporaryEffects } =
    character;

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
    <Page
      pageName={`Recharge ${character.firstName}`}
      prevLocation={Locations.CharacterMenu}
    >
      {showAddBuffModal ? (
        <AddBuffModal
          onClose={() => setShowAddBuffModal(false)}
          onTemporaryEffectAdded={(temporaryEffect) =>
            addTemporaryEffect({ characterKey: id, temporaryEffect })
          }
        />
      ) : null}
      <ResourceSegment>
        Health
        <ButtonCounterWrapper>
          <Button
            text="X"
            customcolor={Theme.Health}
            onClick={() => updateWounds(0)}
          />
          <ResourceCounter
            total={maxHealth}
            remaining={maxHealth - wounds}
            color={Theme.Health}
            onResourceSegmentClick={updateWounds}
          />
        </ButtonCounterWrapper>
      </ResourceSegment>
      <ResourceSegment>
        Stamina
        <ButtonCounterWrapper>
          <Button
            text="X"
            customcolor={Theme.Stamina}
            onClick={() => updateFatigue(0)}
          />
          <ResourceCounter
            total={maxStamina}
            remaining={maxStamina - fatigue}
            color={Theme.Stamina}
            onResourceSegmentClick={updateFatigue}
          />
        </ButtonCounterWrapper>
      </ResourceSegment>
      {showPowerPoints ? (
        <ResourceSegment>
          Power Points:
          <ButtonCounterWrapper>
            <Button
              text="X"
              customcolor={Theme.PowerPoints}
              onClick={() => updatePowerPoints(0)}
            />
            <ResourceCounter
              total={maxPowerPoints}
              remaining={currentPowerPoints}
              color={Theme.PowerPoints}
              onResourceSegmentClick={updatePowerPoints}
            />
          </ButtonCounterWrapper>
        </ResourceSegment>
      ) : null}
      <ResourceSegment>
        Temporary Effects:
        {Boolean(temporaryEffects?.length)
          ? temporaryEffects!.map((temporaryEffect) => (
              <FlexRow>
                {temporaryEffect.name} ({temporaryEffect.duration} rounds)
              </FlexRow>
            ))
          : " none"}
        <IconButton
          onClick={() => setShowAddBuffModal(true)}
          icon={Icons.Add}
          text={"Add Temporary Effect"}
        />
      </ResourceSegment>
      <IconButton
        icon={Icons.Campfire}
        viewbox="0 0 1080 1296"
        onClick={fullRest}
        text="Full Rest"
      />
    </Page>
  );
};
