import { useState } from "react";
import { Button } from "../../../shared/buttons/Button";
import { FlexRow } from "../../../codex/shared/FlexRow";
import { TextInput } from "../../../shared/inputs/TextInput";
import { TemporaryEffect } from "../../../utils/types/TemporaryEffect";
import { Modal } from "react-aria-components";
import styled from "styled-components";
import { Theme } from "../../../Theme";

const ModalContents = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: Theme.Spacing.small,
});

type Props = {
  onTemporaryEffectAdded: (temporaryEffect: TemporaryEffect) => void;
  onClose: () => void;
};
export const AddBuffModal: React.FC<Props> = ({
  onTemporaryEffectAdded: onBuffAdded,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(1);

  return (
    <Modal onOpenChange={onClose} isOpen={true}>
      <ModalContents>
        <TextInput
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          label="Name"
          placeholder="input buff name"
        />
        <TextInput
          value={duration}
          type="number"
          onChange={(e) => setDuration(Number.parseInt(e.target.value))}
          label="Duration"
          placeholder="input duration in rounds"
        />
        <FlexRow>
          <Button text="Cancel" onClick={onClose} />
          <Button
            text="Add"
            negative
            onClick={() => {
              onBuffAdded({ name, duration });
              onClose();
            }}
          />
        </FlexRow>
      </ModalContents>
    </Modal>
  );
};
