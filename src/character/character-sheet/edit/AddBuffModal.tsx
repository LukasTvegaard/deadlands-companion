import { useState } from "react";
import { Button } from "../../../shared/buttons/Button";
import { FlexRow } from "../../../codex/shared/FlexRow";
import { TextInput } from "../../../shared/inputs/TextInput";
import { TemporaryEffect } from "../../../utils/types/TemporaryEffect";
import { Modal } from "react-aria-components";
import styled from "styled-components";
import { Theme } from "../../../Theme";
import { TextElement } from "../../../shared/text/Text";

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

  const [errors, setErrors] = useState<string[]>([]);

  const validate = () => {
    if (name === "" || duration === 0) return false;
    return true;
  };

  const onAddTemporaryEffect = (effectName: string, effectDuration: number) => {
    if (!validate()) {
      setErrors(["Please fill in all fields"]);
      return;
    }
    onBuffAdded({ name: effectName, duration: effectDuration });
    onClose();
  };

  return (
    <Modal onOpenChange={onClose} isOpen={true}>
      <ModalContents>
        <TextInput
          required
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
        {errors.map((error) => (
          <TextElement key={error} color={Theme.Error[300]}>
            {error}
          </TextElement>
        ))}
        <FlexRow>
          <Button text="Cancel" onClick={onClose} />
          <Button
            text="Add"
            negative
            onClick={() => {
              onAddTemporaryEffect(name, duration);
            }}
          />
        </FlexRow>
      </ModalContents>
    </Modal>
  );
};
