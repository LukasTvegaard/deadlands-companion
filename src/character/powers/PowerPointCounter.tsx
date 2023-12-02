import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Button } from "../../shared/buttons/Button";
import { FlexRow } from "../../codex/shared/FlexRow";
import { PowerDetailType } from "../../utils/types/PowerDetailType";
import { getMaxPowerPoints } from "../character-logic/PowerPointLogic";
import { updateWeirdSciencePowerPoints } from "./PowerDataAccess";
import { ResourceCounter } from "../character-sheet/resources/ResourceCounter";
import { Theme } from "../../Theme";

type PowerPointCounterProps = {
  powerDetail: PowerDetailType;
};
export const PowerPointCounter = ({ powerDetail }: PowerPointCounterProps) => {
  const character = useContext(CharacterContext);
  const maxPowerPoints = getMaxPowerPoints(character);
  const currentPowerPoints = Math.min(
    powerDetail.currentPowerPoints,
    maxPowerPoints
  );
  return (
    <FlexRow $gap={16}>
      <ResourceCounter
        total={maxPowerPoints}
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
