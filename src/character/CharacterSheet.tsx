import { PageHeader } from "../shared/PageHeader";

export const CharacterSheet = () => {
  return (
    <>
      <PageHeader
        pageName="Cornelia"
        prevLocation={{
          path: `/character`,
          name: "Character Menu",
        }}
      />
    </>
  );
};
