import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";
import Page from "../shared/page/Page";

export const CodexMenu = () => {
  return (
    <Page pageName="Codex">
      <Index>
        <IndexLink to="edges" label={"Edges"} />

        <IndexLink to="hindrances" label={"Hindrances"} />

        <IndexLink to="powers" label={"Powers"} />

        <IndexLink to="weapons" label={"Weapons"} />
      </Index>
    </Page>
  );
};

export default CodexMenu;
