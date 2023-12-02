import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { LocationKey, Locations } from "../../utils/Location";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge } from "../../utils/enums";
import { getCharacterPowerDetails } from "../../static/powers/PowerUtil";
import { PowerRow } from "./PowerRow";
import { InfoAndResources } from "../character-sheet/InfoAndResources";

export const Powers = () => {
  const character = useContext(CharacterContext);
  const isWeirdScientist = characterHasEdge(
    Edge.ArcaneBackgroundWeirdScience,
    character
  );
  return (
    <Page pageName="Powers" prevLocation={Locations.CharacterMenu}>
      <InfoAndResources locationKey={LocationKey.CharacterPower} />
      <ListTile title={"Powers"} dark editLink={`${Locations.PowerPage.path}`}>
        {character.powers
          ? getCharacterPowerDetails(character).map((powerDetail) => {
              return (
                <PowerRow
                  key={powerDetail.key}
                  powerDetail={powerDetail}
                  isWeirdScientist={isWeirdScientist}
                />
              );
            })
          : null}
      </ListTile>
    </Page>
  );
};
