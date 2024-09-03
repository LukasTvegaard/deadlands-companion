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
import {
  dataObjectToList,
  snapshotToValue,
} from "../../../utils/firebase/DataFormatting";
import { Button } from "../../../shared/buttons/Button";
import { AddBuffModal } from "./AddBuffModal";
import {
  addTemporaryEffect,
  tickBuffDurationDown as tickTemporaryEffectDuration,
} from "../../../services/temporary-effects-service";
import { FlexRow } from "../../../codex/shared/FlexRow";
import { TextElement } from "../../../shared/text/Text";

const PageContens = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: Theme.Spacing.medium,
});

const TemporaryEffectsTable = styled.ul({
  display: "table",
  borderCollapse: "collapse",
  textAlign: "left",
  gap: Theme.Spacing.small,
  td: {
    padding: Theme.Spacing.small,
    border: `1px solid ${Theme.Surface[200]}`,
    "&.item-name": {
      width: "70%",
    },
    "&.item-duration": {
      width: "30%",
    },
  },
  li: {
    p: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
});

const DurationRowControls = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: Theme.Spacing.small,
  justifyContent: "flex-end",
  alignItems: "center",
});

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
      <PageContens>
        {showAddBuffModal ? (
          <AddBuffModal
            onClose={() => setShowAddBuffModal(false)}
            onTemporaryEffectAdded={(temporaryEffect) =>
              addTemporaryEffect(id, temporaryEffect)
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
        <IconButton
          icon={Icons.Campfire}
          viewbox="0 0 1080 1296"
          onClick={fullRest}
          text="Full Rest"
        />
        <ResourceSegment>
          <FlexRow>
            <TextElement>Temporary Effects</TextElement>
            <IconButton
              onClick={() => setShowAddBuffModal(true)}
              icon={Icons.Add}
              text={"Add"}
            />
          </FlexRow>
          {Boolean(temporaryEffects) ? (
            <TemporaryEffectsTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Duration</th>
                </tr>
              </thead>
              {dataObjectToList(temporaryEffects!).map((temporaryEffect) => (
                <tr key={temporaryEffect.name + temporaryEffect.duration}>
                  <td className="item-name">
                    <TextElement title={temporaryEffect.name}>
                      {temporaryEffect.name}
                    </TextElement>
                  </td>
                  <td className="item-duration">
                    <DurationRowControls>
                      <TextElement title={temporaryEffect.name}>
                        {temporaryEffect.duration}
                      </TextElement>
                      <IconButton
                        iconSize={16}
                        icon={Icons.ChevronDown}
                        onClick={() =>
                          tickTemporaryEffectDuration(
                            character.id,
                            temporaryEffect,
                            true
                          )
                        }
                      />
                      <IconButton
                        iconSize={16}
                        icon={Icons.ChevronUp}
                        onClick={() =>
                          tickTemporaryEffectDuration(
                            character.id,
                            temporaryEffect,
                            false
                          )
                        }
                      />
                    </DurationRowControls>
                  </td>
                </tr>
              ))}
            </TemporaryEffectsTable>
          ) : (
            " none"
          )}
        </ResourceSegment>
      </PageContens>
    </Page>
  );
};
