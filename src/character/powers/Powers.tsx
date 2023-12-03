import { useContext } from "react";
import styled from "styled-components";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { getCharacterPowerDetails } from "../../static/powers/PowerUtil";
import { Edge } from "../../utils/enums";
import { LocationKey, Locations } from "../../utils/Location";
import { PowerRow } from "./PowerRow";
import { Theme } from "../../Theme";
import { ClickableSurface } from "../../shared/ClickableSurface";
import { Resources } from "../character-sheet/resources/Resources";

const StickyPowerPoints = styled.div`
  ${ClickableSurface};
  position: sticky;
  top: 0;
  background-color: ${Theme.Surface[200]};
  z-index: 10;
`;

export const Powers = () => {
  const character = useContext(CharacterContext);
  const isWeirdScientist = characterHasEdge(
    Edge.ArcaneBackgroundWeirdScience,
    character
  );
  return (
    <Page pageName="Powers" prevLocation={Locations.CharacterMenu}>
      <StickyPowerPoints>
        <Resources locationKey={LocationKey.CharacterPower} />
      </StickyPowerPoints>
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
