import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Button } from "../../shared/buttons/Button";
import { FlexRow } from "../../codex/shared/FlexRow";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import {
  getLockedPowerPoints,
  getTotalPowerPoints,
} from "../character-logic/PowerPointLogic";
import { updateWeirdSciencePowerPoints } from "./PowerDataAccess";
import { ResourceCounter } from "../character-sheet/resources/ResourceCounter";
import { Theme } from "../../Theme";

type PowerPointCounterProps = {
  powerDetail: PowerDetailType;
};
export const PowerPointCounter = ({ powerDetail }: PowerPointCounterProps) => {
  // TODO: Add additional logic to handle currently created potions. Potions should subtract from both current and max power points,
  const character = useContext(CharacterContext);
  const totalPowerPoints = getTotalPowerPoints(character);
  const lockedPowerPoints = getLockedPowerPoints(character, powerDetail.key);
  const maxPowerPoints = totalPowerPoints - lockedPowerPoints;
  const currentPowerPoints = Math.min(
    powerDetail.currentPowerPoints,
    maxPowerPoints
  );
  return (
    <FlexRow $gap={Theme.Spacing.medium}>
      <ResourceCounter
        total={totalPowerPoints}
        locked={lockedPowerPoints}
        remaining={currentPowerPoints}
        noRemainingText="Out of Power Points"
        color={Theme.PowerPoints}
      />
      <div>
        <Button
          text={"Refuel"}
          onClick={() =>
            updateWeirdSciencePowerPoints(
              character.id,
              powerDetail.key,
              maxPowerPoints
            )
          }
        />
      </div>
    </FlexRow>
  );
};
