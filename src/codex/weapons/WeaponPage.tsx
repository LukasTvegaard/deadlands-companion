import { styled } from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Tile } from "../shared/Tile";
import { WeaponList } from "../../static/weapons/WeaponList";

const WeaponGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const WeaponPage = () => {
  return (
    <Page pageName="Weapons" prevLocation={Locations.CodexMenu}>
      <WeaponGroupsWrapper>
        {WeaponList.map((weapon) => {
          return (
            <Tile
              key={weapon.key}
              link={weapon.key}
              name={weapon.name}
              description={""}
            />
          );
        })}
      </WeaponGroupsWrapper>
    </Page>
  );
};
