import { PageHeader } from "../shared/PageHeader";
import { Index } from "../shared/index/Index";
import { IndexLink } from "../shared/index/IndexLink";

export const CodexIndex = () => {
  return (
    <>
      <PageHeader pageName="Codex" />
      <Index>
        <IndexLink to="edges" label={"Edges"} />

        <IndexLink to="hindrances" label={"Hindrances"} />

        <IndexLink to="powers" label={"Powers"} />

        <IndexLink to="weapons" label={"Weapons"} />
      </Index>
    </>
  );
};
