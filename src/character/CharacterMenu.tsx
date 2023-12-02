import Page from "../shared/page/Page";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";
import { LocationKey } from "../utils/Location";
import { InfoAndResources } from "./character-sheet/InfoAndResources";
import { useContext } from "react";
import { CharacterContext } from "../DeadlandsCompanion";
import { getArcaneBackground } from "./character-logic/ArcaneBackgroundLogic";

export const CharacterMenu = () => {
  const character = useContext(CharacterContext);

  return (
    <Page pageName={"Character Menu"}>
      <InfoAndResources locationKey={LocationKey.CharacterMenu} />
      <Index>
        <IndexLink to="sheet" label={"Character Sheet"} />
        <IndexLink to="weapons" label={"Weapons"} />
        {getArcaneBackground(character) ? (
          <IndexLink to="powers" label={"Powers"} />
        ) : null}
        <IndexLink to="gear" label={"Gear"} />
        <IndexLink to="edges" label={"Edges & Hindrances"} />
      </Index>
    </Page>
  );
};

export default CharacterMenu;
