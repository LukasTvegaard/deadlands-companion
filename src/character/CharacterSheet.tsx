import { PageHeader } from "../shared/PageHeader";
import CharacterMenu from "./CharacterMenu";

export const CharacterSheet = () => {
  return (
    <>
      <PageHeader
        pageName="Character Sheet"
        prevLocation={CharacterMenu.Location}
      />
    </>
  );
};
