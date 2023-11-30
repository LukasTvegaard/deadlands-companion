import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { Locations } from "../../utils/Location";

export const Powers = () => {
  const character = useContext(CharacterContext);
  return (
    <Page pageName="Powers" prevLocation={Locations.CharacterMenu}>
      <ListTile title={"Powers"} dark editLink={`${Locations.PowerPage.path}`}>
        <div></div>
      </ListTile>
    </Page>
  );
};
