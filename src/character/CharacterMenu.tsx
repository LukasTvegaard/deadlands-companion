import { PageHeader } from "../shared/PageHeader";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";

export const CharacterMenu = () => {
  return (
    <>
      <PageHeader pageName={"Character Menu"} />
      <Index>
        <IndexLink to="sheet" label={"Character Sheet"} />
        <IndexLink to="settings" label={"Settings"} />
      </Index>
    </>
  );
};

CharacterMenu.Location = {
  path: `/character`,
  name: "Character Menu",
};

export default CharacterMenu;
