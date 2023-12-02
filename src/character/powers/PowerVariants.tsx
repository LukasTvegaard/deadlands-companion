import styled from "styled-components";
import { CharacterContext } from "../../DeadlandsCompanion";
import { FlexRow } from "../../codex/shared/FlexRow";
import { Button } from "../../shared/buttons/Button";

import { getRoll } from "../character-logic/roll-logic/RollLogic";
import { useContext } from "react";
import { EffectVariant } from "../../utils/types/Effect";
import { SingleDiceRow, SingleValueRow } from "../../shared/rows/SingleDiceRow";
import { Theme } from "./../../Theme";
import { MultiDiceRow } from "../../shared/rows/MultiDiceRow";
import { getDamage } from "../character-logic/roll-logic/DamageLogic";
import {
  PowerDetailType,
  PowerType,
  PowerVariant,
  PowerVariantAttack,
  PowerVariantUtility,
} from "../../utils/types/PowerDetailType";
import { Character } from "../../utils/types/Character";
import {
  updateCharacterPowerPoints,
  updateWeirdSciencePowerPoints,
} from "./PowerDataAccess";
import { getSpellcastingSkill } from "../character-logic/ArcaneBackgroundLogic";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Attribute, Edge } from "../../utils/enums";
import { dieTypeToValue } from "../../utils/enums/DieType";

const VariantStyle = styled.div`
  background-color: ${Theme.Surface[300]};
  border-radius: 8px;
`;

const TitleWrapper = styled(FlexRow)`
  font-weight: 500;
  padding: 8px;
  //justify-content: center;
`;

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
`;

const SplitterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
`;

const Separator = styled.div`
  border-left: 1px solid ${Theme.Surface[400]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
  border-top: 1px solid ${Theme.Surface[400]};
`;

const NotesWrapper = styled.div`
  padding: 8px;
  border-top: 1px solid ${Theme.Surface[400]};
  white-space: pre-line;
`;

const isAttackPower = (
  powerVariant: PowerVariant
): powerVariant is PowerVariantAttack => {
  return powerVariant.type === PowerType.Attack;
};

const isUtilityPower = (
  powerVariant: PowerVariant
): powerVariant is PowerVariantUtility => {
  return powerVariant.type === PowerType.Utility;
};

const getRateOfFire = (variant: PowerVariant): number => {
  if (isAttackPower(variant)) {
    return variant.rateOfFire;
  } else if (isUtilityPower(variant)) {
    return variant.duration;
  } else {
    return variant.targets;
  }
};

const getCurrentPowerPoints = (
  character: Character,
  powerDetail: PowerDetailType,
  isWeirdScientist: boolean
): number => {
  if (isWeirdScientist) {
    return powerDetail.currentPowerPoints;
  }

  return character.currentPowerPoints;
};

const powerHasPowerPoints = (
  variant: PowerVariant,
  currentPowerPoints: number
): boolean => {
  return variant.powerPointCost <= currentPowerPoints;
};

const activatePower = (
  character: Character,
  powerDetail: PowerDetailType,
  variant: PowerVariant,
  isWeirdScientist: boolean
) => {
  const currentPowerPoints = getCurrentPowerPoints(
    character,
    powerDetail,
    isWeirdScientist
  );
  const newPowerPoints = currentPowerPoints - variant.powerPointCost;
  if (isWeirdScientist) {
    updateWeirdSciencePowerPoints(
      character.id,
      powerDetail.key,
      newPowerPoints
    );
  } else {
    updateCharacterPowerPoints(character.id, newPowerPoints);
  }
};

const getRangeFromAttribute = (attribute: Attribute, character: Character) => {
  return `${dieTypeToValue(character.attributes[attribute])} (${attribute})`;
};

// IDEA: Could augment this to account for target's wounds?
const getHealingModifier = (character: Character, variant: PowerVariant) => {
  if (
    variant.type === PowerType.Healing &&
    characterHasEdge(Edge.Healer, character)
  ) {
    return 2;
  }

  return 0;
};

type PowerVariantProps = {
  powerDetail: PowerDetailType;
  isWeirdScientist: boolean;
};
export const PowerVariants = ({
  powerDetail,
  isWeirdScientist,
}: PowerVariantProps) => {
  const character = useContext(CharacterContext);
  const spellcastingSkill = getSpellcastingSkill(character);
  const singleVariantPower = powerDetail.variants.length === 1;

  return (
    <GroupContainer>
      {powerDetail.variants.map((variant) => {
        const rateOfFire = getRateOfFire(variant);
        const healingModifier = getHealingModifier(character, variant);

        const activationRoll = getRoll(spellcastingSkill, character, [
          {
            target: spellcastingSkill,
            effectVariant: EffectVariant.ModifyFlat,
            value: variant.activationModifier,
          },
          {
            target: spellcastingSkill,
            effectVariant: EffectVariant.ModifyFlat,
            value: healingModifier,
          },
        ]);

        return (
          <VariantStyle key={variant.name}>
            {singleVariantPower ? null : (
              <TitleWrapper>{variant.name}</TitleWrapper>
            )}
            <SplitterGrid>
              <SingleDiceRow
                label={"Activation Roll"}
                dieType={activationRoll.dice}
                modifier={activationRoll.modifier}
                noBorder={singleVariantPower}
              />
              <Separator>
                <SingleValueRow
                  label={
                    isAttackPower(variant)
                      ? "Rate of Fire"
                      : isUtilityPower(variant)
                      ? "Duration"
                      : "Targets"
                  }
                  value={rateOfFire}
                  noBorder={singleVariantPower}
                />
              </Separator>
            </SplitterGrid>
            {isAttackPower(variant) ? (
              <SplitterGrid>
                <MultiDiceRow
                  label={"Damage"}
                  dieTypes={getDamage(variant.damage, character).dieTypes}
                  modifier={getDamage(variant.damage, character).modifier}
                />
                <Separator>
                  <SingleValueRow
                    label={"Armor Pen"}
                    value={variant.armorPen}
                  />
                </Separator>
              </SplitterGrid>
            ) : null}
            <SplitterGrid>
              <SingleValueRow
                label={"Range"}
                value={
                  variant.rangeLong === 0
                    ? "Touch"
                    : typeof variant.rangeLong === "number"
                    ? `${variant.rangeShort} / ${variant.rangeMedium} / ${variant.rangeLong}`
                    : getRangeFromAttribute(variant.rangeLong, character)
                }
              />
              <ButtonWrapper>
                <div>
                  <Button
                    text={"Activate"}
                    onClick={() =>
                      activatePower(
                        character,
                        powerDetail,
                        variant,
                        isWeirdScientist
                      )
                    }
                    disabled={
                      !powerHasPowerPoints(
                        variant,
                        getCurrentPowerPoints(
                          character,
                          powerDetail,
                          isWeirdScientist
                        )
                      )
                    }
                  />
                </div>
              </ButtonWrapper>
            </SplitterGrid>

            {variant.notes ? (
              <NotesWrapper>{variant.notes}</NotesWrapper>
            ) : null}
          </VariantStyle>
        );
      })}
    </GroupContainer>
  );
};
