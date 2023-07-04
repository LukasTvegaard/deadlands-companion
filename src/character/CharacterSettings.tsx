import Page from "../shared/page/Page";
import CharacterMenu from "./CharacterMenu";

type CharacterSettingsProps = {
  setSelectedCharacter: (characterId: string | null) => void;
};
export const CharacterSettings = ({
  setSelectedCharacter,
}: CharacterSettingsProps) => {
  return (
    <Page pageName="Character Settings" prevLocation={CharacterMenu.Location}>
      <button onClick={() => setSelectedCharacter(null)}>
        Switch Character
      </button>
    </Page>
  );
};
