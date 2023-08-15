import { useContext } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { LocationKey, Locations } from "../../utils/Location";
import { Edges } from "../../static/edges/EdgeList";
import { Edge } from "../../utils/enums";
import { EdgeHindranceRow } from "./EdgeHindranceRow";
import { getPrevLocationQuery } from "../../shared/StyledLink";

export const EdgesAndHindrances = () => {
  const character = useContext(CharacterContext);
  return (
    <Page pageName="Edges & Hindrances" prevLocation={Locations.CharacterMenu}>
      <ListTile
        title={"Edges"}
        editLink={`${Locations.EdgePage.path}${getPrevLocationQuery(
          LocationKey.CharacterEdgeHindrance
        )}`}
      >
        {character.edges
          ? Object.keys(character.edges).map((edgeKey) => {
              const edgeDetail = Edges[edgeKey as Edge];
              return (
                <EdgeHindranceRow
                  key={edgeKey}
                  title={edgeDetail.name}
                  description={edgeDetail.description_short}
                  isEdge
                />
              );
            })
          : null}
      </ListTile>
      <br />
      <ListTile
        title={"Hindrances"}
        editLink={`${Locations.HindrancePage.path}${getPrevLocationQuery(
          LocationKey.CharacterEdgeHindrance
        )}`}
      >
        {character.edges
          ? Object.keys(character.edges).map((edgeKey) => {
              const hindranceDetail = Edges[edgeKey as Edge];
              return (
                <EdgeHindranceRow
                  key={edgeKey}
                  title={hindranceDetail.name}
                  description={hindranceDetail.description_short}
                />
              );
            })
          : null}
      </ListTile>
      <br />
    </Page>
  );
};
