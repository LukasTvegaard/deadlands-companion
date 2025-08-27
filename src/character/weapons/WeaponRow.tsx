import { styled } from "styled-components";
import { Theme } from "../../Theme";
import {
  WeaponDetailType,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { AmmoCounter } from "./AmmoCounter";
import { WeaponAttacks } from "./WeaponAttacks";
import { Checkbox } from "../../shared/buttons/Checkbox";
import { setTrademarkWeapon } from "./WeaponDataAccess";
import { useContext } from "react";
import { FlexRow } from "../../codex/shared/FlexRow";
import { CharacterContext } from "../../CharacterContext";

const WeaponRowStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px;
  background-color: ${Theme.Surface[250]};
  border-radius: 8px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${Theme.Surface[300]};
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Primary[600]};
`;

type WeaponRowProps = {
  weaponDetail: WeaponDetailType;
  showTrademarkWeaponCheckbox: boolean;
};
export const WeaponRow = ({
  weaponDetail,
  showTrademarkWeaponCheckbox,
}: WeaponRowProps) => {
  const character = useContext(CharacterContext);
  return (
    <WeaponRowStyle>
      <FlexRow>
        <Title>{weaponDetail.name}</Title>
        {showTrademarkWeaponCheckbox ? (
          <Checkbox
            isSelected={weaponDetail.isTrademarkWeapon || false}
            childrenLeft
            onChange={() =>
              setTrademarkWeapon(
                character.id,
                weaponDetail.key,
                !weaponDetail.isTrademarkWeapon
              )
            }
          >
            Trademark Weapon
          </Checkbox>
        ) : null}
      </FlexRow>
      {weaponDetail.type === WeaponType.Ammo ? (
        <AmmoCounter ammoWeaponDetail={weaponDetail}></AmmoCounter>
      ) : null}

      <WeaponAttacks weaponDetail={weaponDetail} />
    </WeaponRowStyle>
  );
};
