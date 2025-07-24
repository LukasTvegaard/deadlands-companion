import { Modal } from "react-aria-components";

import { FlexCol } from "../../codex/shared/FlexRow";
import { DLRadioGroup } from "../../shared/inputs/RadioGroup";
import { ModalTitle } from "../../shared/text/ModalTitle";
import { getPowerDetailByKey } from "../../static/powers/PowerUtil";
import { Theme } from "../../Theme";
import { Character } from "../../utils/types/Character";
import { Potion } from "../../utils/types/Potion";
import { getCharacterFullName } from "../character-logic/InfoLogic";
import { givePotion } from "./PotionsService";

type GivePotionModalProps = {
  potion: Potion;
  partyCharacters?: Character[];
  onClose: () => void;
};
export const GivePotionModal = ({
  potion,
  partyCharacters,
  onClose,
}: GivePotionModalProps) => {
  const powerDetail = getPowerDetailByKey(potion.power);

  const partyCharacterOptions =
    partyCharacters?.map((character) => ({
      value: character.id,
      label: getCharacterFullName(character),
    })) || [];

  function onGivePotion(value: string) {
    givePotion(potion, value);
    onClose();
  }

  return (
    <Modal onOpenChange={onClose} isOpen={true} isDismissable>
      <FlexCol $gap={Theme.Spacing.small}>
        <ModalTitle>Give Potion of {powerDetail?.name} To</ModalTitle>
        <DLRadioGroup
          value={potion.possessedBy}
          options={partyCharacterOptions}
          onChange={onGivePotion}
        />
      </FlexCol>
    </Modal>
  );
};
