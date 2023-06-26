import { PageHeader } from "../shared/PageHeader";
import CharacterMenu from "./CharacterMenu";

type CharacterSettingsProps = {
  setSelectedCharacter: (characterId: string | null) => void;
};
export const CharacterSettings = ({
  setSelectedCharacter,
}: CharacterSettingsProps) => {
  return (
    <>
      <PageHeader
        pageName="Character Settings"
        prevLocation={CharacterMenu.Location}
      />
      <button onClick={() => setSelectedCharacter(null)}>
        Switch Character
      </button>
    </>
  );
};
