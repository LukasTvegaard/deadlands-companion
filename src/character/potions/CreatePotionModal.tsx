// TODO: Remember to handle the power point restrictions,
// e.g: Don't allow creating a potion if the power's currentPowerPoints is lower than the potion's powerPointCost
// and don't allow creating a potion if this would cause the creator to have used more than half (rounded down) of their power points on potions.

import { Modal } from "react-aria-components";
import { Character } from "../../utils/types/Character";
import { getCharacterFullName } from "../character-logic/InfoLogic";
import { useContext, useState } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { getCharacterPowerDetails } from "../../static/powers/PowerUtil";
import { Select } from "../../codex/shared/Select";
import { Theme } from "../../Theme";
import { FlexCol, FlexRow } from "../../codex/shared/FlexRow";
import { Checkbox } from "../../shared/buttons/Checkbox";
import {
  getTotalPotionPowerPoints,
  getUsedPotionPowerPoints,
} from "../character-logic/PowerPointLogic";
import { ResourceCounter } from "../character-sheet/resources/ResourceCounter";
import styled from "styled-components";
import { Button } from "../../shared/buttons/Button";
import { PowerType } from "../../utils/types/PowerDetailType";
import { StyledInput } from "../../shared/inputs/TextInput";
import { TextElement } from "../../shared/text/Text";
import { createPotion } from "./PotionsService";
import { ModalTitle } from "../../shared/text/ModalTitle";

const RowContainer = styled.div`
  border-top: 1px solid ${Theme.Surface[600]};
  padding-top: ${Theme.Spacing.small};
`;

type PowerPointCostTextProps = {
  $potionTooExpensive: boolean;
};
const PowerPointCostText = styled.div<PowerPointCostTextProps>`
  color: ${(props) =>
    props.$potionTooExpensive ? Theme.Error[300] : Theme.Text};
`;

type CreatePotionModalProps = {
  partyCharacters?: Character[];
  onClose: () => void;
};
export const CreatePotionModal = ({
  partyCharacters,
  onClose,
}: CreatePotionModalProps) => {
  const character = useContext(CharacterContext);

  const [selectedPower, setSelectedPower] = useState<string | null>(null);
  const [selectedPowerVariant, setSelectedPowerVariant] = useState<
    string | null
  >(null);
  const [isRaise, setIsRaise] = useState<boolean>(false);
  const [extensions, setExtensions] = useState<number>(0);
  const [possessionTarget, setPossessionTarget] = useState<string>(
    character.id
  );

  function onPowerSelection(powerKey: string) {
    setSelectedPower(powerKey);
    setSelectedPowerVariant(null); // Reset variant when power changes
  }

  const availablePowers = getCharacterPowerDetails(character);
  const availablePowerOptions = availablePowers.map((powerDetail) => ({
    value: powerDetail.key,
    label: powerDetail.name,
    disabled: false,
  }));
  const availablePowerOptionsWithPlaceholder = [
    { value: "", label: "Select a power...", disabled: true },
    ...availablePowerOptions,
  ];

  const selectedPowerDetail = availablePowers.find(
    (powerDetail) => powerDetail.key === selectedPower
  );
  const isMultiVariantPower = selectedPowerDetail
    ? selectedPowerDetail.variants.length > 1
    : false;

  const availablePowerVariantOptions =
    selectedPowerDetail?.variants.map((powerDetailVariant) => ({
      value: powerDetailVariant.name,
      label: powerDetailVariant.name,
      disabled: false,
    })) ?? [];
  const availablePowerVariantOptionsWithPlaceholder = [
    { value: "", label: "Select a variant...", disabled: true },
    ...availablePowerVariantOptions,
  ];

  const selectedPowerDetailVariant = isMultiVariantPower
    ? selectedPowerDetail?.variants.find(
        (variant) => variant.name === selectedPowerVariant
      )
    : selectedPowerDetail?.variants[0];

  const isExtendable = selectedPowerDetailVariant?.type === PowerType.Utility;

  const partyCharacterOptions =
    partyCharacters?.map((character) => ({
      value: character.id,
      label: getCharacterFullName(character),
      disabled: false,
    })) || [];

  const totalPotionPowerPoints = getTotalPotionPowerPoints(character);
  const usedPotionPowerPoints = getUsedPotionPowerPoints(
    character,
    selectedPowerDetail?.key
  );
  const maxPotionPowerPoints = totalPotionPowerPoints - usedPotionPowerPoints;
  const basePowerPointCost = selectedPowerDetailVariant?.powerPointCost ?? 0;
  const extensionsCost =
    isExtendable && extensions
      ? (selectedPowerDetailVariant.extensionPowerPointCost ?? 0) * extensions
      : 0;
  const powerPointCost = basePowerPointCost + extensionsCost;

  const potionTooExpensive = powerPointCost > maxPotionPowerPoints;

  function onCreatePotion() {
    if (selectedPowerDetail && selectedPowerDetailVariant) {
      createPotion({
        power: selectedPowerDetail.key,
        powerVariant: selectedPowerDetailVariant.name,
        isRaise,
        extensions,
        possessedBy: possessionTarget,
        createdBy: character.id,
        powerPointCost,
        notes: "",
      });
    }
    onClose();
  }

  return (
    <Modal onOpenChange={onClose} isOpen={true} isDismissable>
      <FlexCol $gap={Theme.Spacing.small}>
        <ModalTitle>Create New Potion</ModalTitle>
        <FlexRow $gap={Theme.Spacing.small}>
          Power:
          <Select
            value={selectedPower ?? ""}
            options={availablePowerOptionsWithPlaceholder}
            setValue={onPowerSelection}
          />
        </FlexRow>
        {selectedPowerDetail && isMultiVariantPower ? (
          <FlexRow $gap={Theme.Spacing.small}>
            Power Variant:
            <Select
              value={selectedPowerVariant ?? ""}
              options={availablePowerVariantOptionsWithPlaceholder}
              setValue={setSelectedPowerVariant}
            />
          </FlexRow>
        ) : null}
        {selectedPowerDetailVariant ? (
          <>
            {isExtendable ? (
              <RowContainer>
                <FlexRow $gap={Theme.Spacing.small}>
                  <TextElement>Extensions:</TextElement>
                  <StyledInput
                    style={{ width: "60px" }}
                    value={extensions}
                    type="number"
                    min={0}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (!Number.isNaN(value)) {
                        setExtensions(value);
                      }
                    }}
                  />
                </FlexRow>
              </RowContainer>
            ) : null}
            <RowContainer>
              <FlexCol $gap={Theme.Spacing.small}>
                <FlexRow $gap={Theme.Spacing.small}>
                  <TextElement>Potion PP cost:</TextElement>
                  <PowerPointCostText $potionTooExpensive={potionTooExpensive}>
                    {powerPointCost}
                  </PowerPointCostText>
                </FlexRow>
                <ResourceCounter
                  total={totalPotionPowerPoints}
                  locked={usedPotionPowerPoints}
                  remaining={maxPotionPowerPoints}
                  stagedForUse={powerPointCost}
                  noRemainingText="Out of Power Points"
                  color={Theme.PowerPoints}
                />
              </FlexCol>
            </RowContainer>

            <RowContainer>
              <FlexRow $gap={Theme.Spacing.small}>
                Raise?:
                <Checkbox
                  isSelected={isRaise}
                  onChange={() => setIsRaise(!isRaise)}
                />
              </FlexRow>
            </RowContainer>
            <RowContainer>
              <FlexRow $gap={Theme.Spacing.small}>
                Give to:
                <Select
                  value={possessionTarget}
                  options={partyCharacterOptions}
                  setValue={(possessionTarget) =>
                    setPossessionTarget(possessionTarget)
                  }
                />
              </FlexRow>
            </RowContainer>
            <RowContainer>
              <FlexRow>
                <Button negative text="Cancel" onClick={onClose} />
                <Button
                  text="Create"
                  onClick={onCreatePotion}
                  disabled={
                    potionTooExpensive ||
                    !selectedPowerDetail ||
                    !selectedPowerDetailVariant
                  }
                />
              </FlexRow>
            </RowContainer>
          </>
        ) : null}
      </FlexCol>
    </Modal>
  );
};
