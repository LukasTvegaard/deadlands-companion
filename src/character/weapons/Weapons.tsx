import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { LocationKey, Locations } from "../../utils/Location";
import { getPrevLocationQuery } from "../../shared/StyledLink";
import { WeaponRow } from "./WeaponRow";
import { getCharacterWeaponDetails } from "../../static/weapons/WeaponUtil";

export const Weapons = () => {
  const character = useContext(CharacterContext);
  return (
    <Page pageName="Weapons" prevLocation={Locations.CharacterMenu}>
      <ListTile
        title={"Weapons"}
        dark
        editLink={`${Locations.WeaponPage.path}${getPrevLocationQuery(
          LocationKey.CharacterWeapon
        )}`}
      >
        {character.weapons
          ? getCharacterWeaponDetails(character).map((weaponDetail) => {
              return (
                <WeaponRow key={weaponDetail.key} weaponDetail={weaponDetail} />
              );
            })
          : null}
      </ListTile>
    </Page>
  );
};
