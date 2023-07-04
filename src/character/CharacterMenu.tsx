import Page from "../shared/page/Page";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";

export const CharacterMenu = () => {
  return (
    <Page pageName={"Character Menu"}>
      <Index>
        <IndexLink to="sheet" label={"Character Sheet"} />
        <IndexLink to="settings" label={"Settings"} />
      </Index>
    </Page>
  );
};

CharacterMenu.Location = {
  path: `/character`,
  name: "Menu",
};

export default CharacterMenu;
