import { Modal } from "react-aria-components";
import { Character } from "../../utils/types/Character";
import { Potion } from "../../utils/types/Potion";
import { getPowerDetailByKey } from "../../static/powers/PowerUtil";
import { getCharacterFullName } from "../character-logic/InfoLogic";
import { DLRadioGroup } from "../../shared/inputs/RadioGroup";
import { givePotion } from "./PotionsService";
import { ModalTitle } from "../../shared/text/ModalTitle";

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
      <ModalTitle>Give Potion of {powerDetail?.name} To</ModalTitle>
      <DLRadioGroup
        value={potion.possessedBy}
        options={partyCharacterOptions}
        onChange={onGivePotion}
      />
    </Modal>
  );
};
