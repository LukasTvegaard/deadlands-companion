import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { LocationKey, Locations } from "../../utils/Location";
import { WeaponRow } from "./WeaponRow";
import { getCharacterWeaponDetails } from "../../static/weapons/WeaponUtil";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge } from "../../utils/enums";
import { Resources } from "../character-sheet/resources/Resources";

export const Weapons = () => {
  const character = useContext(CharacterContext);

  const weaponDetails = getCharacterWeaponDetails(character);
  const hasTrademarkWeaponEdge =
    characterHasEdge(Edge.TrademarkWeaponShooting, character) ||
    characterHasEdge(Edge.TrademarkWeaponFighting, character);
  const hasExistingTrademarkWeapon = weaponDetails.some(
    (weaponDetail) => weaponDetail.isTrademarkWeapon
  );
  return (
    <Page pageName="Weapons" prevLocation={Locations.CharacterMenu}>
      <Resources locationKey={LocationKey.CharacterWeapon} />
      <ListTile
        title={"Weapons"}
        dark
        editLink={`${Locations.WeaponPage.path}`}
      >
        {weaponDetails
          ? weaponDetails.map((weaponDetail) => {
              return (
                <WeaponRow
                  key={weaponDetail.key}
                  weaponDetail={weaponDetail}
                  showTrademarkWeaponCheckbox={
                    hasTrademarkWeaponEdge &&
                    (!hasExistingTrademarkWeapon ||
                      !!weaponDetail.isTrademarkWeapon)
                  }
                />
              );
            })
          : null}
      </ListTile>
    </Page>
  );
};
