import { useState } from "react";
import { Modal } from "react-aria-components";
import styled from "styled-components";
import { Theme } from "../../Theme";
import { TextInput } from "../../shared/inputs/TextInput";
import { TextElement } from "../../shared/text/Text";
import { FlexRow } from "../../codex/shared/FlexRow";
import { Button } from "../../shared/buttons/Button";
import { PowerType, PowerVariant } from "../../utils/types/PowerDetailType";

const ModalContents = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: Theme.Spacing.small,
});

function getAddTargetPowerPointCost(powerVariant: PowerVariant): number {
  if (powerVariant.type === PowerType.Utility) {
    return powerVariant.addTargetPowerPointCost ?? 0;
  }

  return 0;
}

function getPowerPointCost(powerVariant: PowerVariant, targets: number) {
  return (
    powerVariant.powerPointCost +
    getAddTargetPowerPointCost(powerVariant) * (targets - 1) // First target is free
  );
}

type SelectTargetsModalProps = {
  powerVariant: PowerVariant;
  currentPowerPoints: number;
  activatePower: (powerPointCost: number) => void;
  onClose: () => void;
};
export const SelectTargetsModal: React.FC<SelectTargetsModalProps> = ({
  powerVariant,
  currentPowerPoints,
  activatePower,
  onClose,
}) => {
  const [targets, setTargets] = useState(1);

  const onActivatePower = (targets: number) => {
    const powerPointCost = getPowerPointCost(powerVariant, targets);

    activatePower(powerPointCost);
    onClose();
  };

  const totalPowerPointCost = getPowerPointCost(powerVariant, targets);

  return (
    <Modal onOpenChange={onClose} isOpen={true}>
      <ModalContents>
        <TextInput
          required
          value={targets}
          type="number"
          onChange={(e) => setTargets(Number.parseInt(e.target.value))}
          label="Select number of targets"
          min={1}
          max={5}
          placeholder="Number of targets"
          autoFocus
        />
        {targets && targets > 0 ? (
          <TextElement>
            {`Total power point cost: ${totalPowerPointCost}`}
          </TextElement>
        ) : null}
        <FlexRow>
          <Button text="Cancel" negative onClick={onClose} />
          <Button
            text="Cast"
            onClick={() => {
              onActivatePower(targets);
            }}
            disabled={
              totalPowerPointCost > currentPowerPoints ||
              !targets ||
              targets < 1
            }
          />
        </FlexRow>
      </ModalContents>
    </Modal>
  );
};
