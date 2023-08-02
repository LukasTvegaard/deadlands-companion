import Page from "../shared/page/Page";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";
import { LocationKey } from "../utils/Location";
import { InfoAndResources } from "./character-sheet/InfoAndResources";

export const CharacterMenu = () => {
  return (
    <Page pageName={"Character Menu"}>
      <InfoAndResources locationKey={LocationKey.CharacterMenu} />
      <Index>
        <IndexLink to="sheet" label={"Character Sheet"} />
        <IndexLink to="edges" label={"Edges & Hindrances"} />
        <IndexLink to="weapons" label={"Weapons"} />
        <IndexLink to="powers" label={"Powers"} />
        <IndexLink to="gear" label={"Gear"} />
      </Index>
    </Page>
  );
};

export default CharacterMenu;
