import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { Locations } from "../../utils/Location";
import { Money } from "./Money";

export const Gear = () => {
  const character = useContext(CharacterContext);
  return (
    <Page pageName="Gear" prevLocation={Locations.CharacterMenu}>
      <Money />
      <ListTile title={"Gear"} editLink={`${Locations.EdgePage.path}`}>
        <div>Gear: {character.firstName}</div>
      </ListTile>
    </Page>
  );
};
