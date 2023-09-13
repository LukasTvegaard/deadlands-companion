import { styled } from "styled-components";
import { Theme } from "../../Theme";
import {
  WeaponDetailType,
  WeaponType,
} from "../../utils/types/WeaponDetailType";
import { AmmoCounter } from "./AmmoCounter";
import { WeaponAttacks } from "./WeaponAttacks";

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
};
export const WeaponRow = ({ weaponDetail }: WeaponRowProps) => {
  return (
    <WeaponRowStyle>
      <Title>{weaponDetail.name}</Title>
      {weaponDetail.type === WeaponType.Ammo ? (
        <AmmoCounter ammoWeaponDetail={weaponDetail}></AmmoCounter>
      ) : null}

      <WeaponAttacks weaponDetail={weaponDetail} />
    </WeaponRowStyle>
  );
};
