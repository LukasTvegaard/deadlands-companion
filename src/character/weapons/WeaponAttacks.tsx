import styled from "styled-components";
import { FlexRow } from "../../codex/shared/FlexRow";
import { Button } from "../../shared/buttons/Button";
import {
  WeaponDetailType,
  WeaponAttack,
  AmmoWeaponDetail,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { getRoll } from "../character-logic/roll-logic/RollLogic";
import { updateAmmo } from "./WeaponDataAccess";
import { useContext } from "react";
import { EffectVariant } from "../../utils/types/Effect";
import { SingleDiceRow, SingleValueRow } from "../../shared/rows/SingleDiceRow";
import { Theme } from "./../../Theme";
import { MultiDiceRow } from "../../shared/rows/MultiDiceRow";
import { getDamage } from "../character-logic/roll-logic/DamageLogic";
import { Character } from "../../utils/types/Character";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge } from "../../utils/enums";
import { CharacterContext } from "../../CharacterContext";

const Attack = styled.div`
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
  margin-right: 8px;
  border-top: 1px solid ${Theme.Surface[400]};
`;

const NotesWrapper = styled.div`
  padding: 8px;
  border-top: 1px solid ${Theme.Surface[400]};
  white-space: pre-line;
`;

const getTrademarkWeaponModifier = (
  character: Character,
  weaponDetail: WeaponDetailType
) => {
  if (weaponDetail.isTrademarkWeapon) {
    if (
      characterHasEdge(Edge.TrademarkWeaponFightingImproved, character) ||
      characterHasEdge(Edge.TrademarkWeaponShootingImproved, character)
    ) {
      return 2;
    }
    if (
      characterHasEdge(Edge.TrademarkWeaponFighting, character) ||
      characterHasEdge(Edge.TrademarkWeaponShooting, character)
    ) {
      return 1;
    }
  }
  return 0;
};

const isAmmoWeapon = (
  weaponDetail: WeaponDetailType
): weaponDetail is AmmoWeaponDetail => {
  return weaponDetail.type === WeaponType.Ammo;
};

const getRateOfFire = (
  attack: WeaponAttack,
  weaponDetail: WeaponDetailType
): number => {
  if (attack.rateOfFire === "all") {
    if (isAmmoWeapon(weaponDetail)) {
      return weaponDetail.currentAmmo;
    }

    return 1;
  }

  return attack.rateOfFire;
};

const attackHasAmmo = (
  attack: WeaponAttack,
  weaponDetail: AmmoWeaponDetail
): boolean => {
  if (isAmmoWeapon(weaponDetail)) {
    if (attack.ammoCost === "all") {
      return weaponDetail.currentAmmo > 0;
    }
    return weaponDetail.currentAmmo >= attack.ammoCost;
  }

  return true;
};

const fireWeapon = (
  characterKey: string,
  weaponDetail: AmmoWeaponDetail,
  attack: WeaponAttack
) => {
  const newAmmo =
    attack.ammoCost === "all" ? 0 : weaponDetail.currentAmmo - attack.ammoCost;
  updateAmmo(characterKey, weaponDetail.key, newAmmo);
};

type WeaponAttackProps = {
  weaponDetail: WeaponDetailType;
};
export const WeaponAttacks = ({ weaponDetail }: WeaponAttackProps) => {
  const character = useContext(CharacterContext);

  const tradeMarkWeaponAttackModifier = getTrademarkWeaponModifier(
    character,
    weaponDetail
  );

  return (
    <GroupContainer>
      {weaponDetail.attacks.map((attack) => {
        const rateOfFire = getRateOfFire(attack, weaponDetail);
        const hitRoll = getRoll(attack.skill, character, [
          {
            target: attack.skill,
            effectVariant: EffectVariant.ModifyFlat,
            value: attack.attackModifier,
          },
          {
            target: attack.skill,
            effectVariant: EffectVariant.ModifyFlat,
            value: tradeMarkWeaponAttackModifier,
          },
        ]);

        const damageRoll = getDamage(attack.damage, character);

        return (
          <Attack key={attack.name}>
            <TitleWrapper>{attack.name}</TitleWrapper>
            <SplitterGrid>
              <SingleDiceRow
                label={"Hit Roll"}
                dieType={hitRoll.dice}
                modifier={hitRoll.modifier}
              />
              <Separator>
                <SingleValueRow label={"Rate of Fire"} value={rateOfFire} />
              </Separator>
            </SplitterGrid>
            <SplitterGrid>
              <MultiDiceRow
                label={"Damage"}
                dieTypes={damageRoll.dieTypes}
                modifier={damageRoll.modifier}
              />
              <Separator>
                <SingleValueRow
                  label={"Armor Pen"}
                  value={weaponDetail.armorPen}
                />
              </Separator>
            </SplitterGrid>
            {isAmmoWeapon(weaponDetail) && attack.ammoCost !== 0 ? (
              <SplitterGrid>
                <SingleValueRow
                  label={"Range"}
                  value={
                    attack.rangeLong === 0
                      ? "Melee"
                      : attack.rangeLong === "Cone"
                      ? "Cone"
                      : `${attack.rangeShort} / ${attack.rangeMedium} / ${attack.rangeLong}`
                  }
                />
                <ButtonWrapper>
                  <div>
                    <Button
                      text={"Fire"}
                      onClick={() =>
                        fireWeapon(character.id, weaponDetail, attack)
                      }
                      disabled={!attackHasAmmo(attack, weaponDetail)}
                    />
                  </div>
                </ButtonWrapper>
              </SplitterGrid>
            ) : (
              <SingleValueRow
                label={"Range"}
                value={
                  attack.rangeLong === 0
                    ? "Melee"
                    : attack.rangeLong === "Cone"
                    ? "Cone"
                    : attack.rangeShort === attack.rangeMedium &&
                      attack.rangeMedium === attack.rangeLong
                    ? `${attack.rangeShort}`
                    : `${attack.rangeShort} / ${attack.rangeMedium} / ${attack.rangeLong}`
                }
              />
            )}

            {attack.notes ? <NotesWrapper>{attack.notes}</NotesWrapper> : null}
          </Attack>
        );
      })}
    </GroupContainer>
  );
};
