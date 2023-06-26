import { PageHeader } from "../shared/PageHeader";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";

export const location = {
  path: `/character`,
  name: "Character Menu",
};

export const CharacterIndex = () => {
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
