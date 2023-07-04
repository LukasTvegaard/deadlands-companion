import Page from "../shared/page/Page";

type SettingsProps = {
  setSelectedCharacter: (characterId: string | null) => void;
};
export const Settings = ({ setSelectedCharacter }: SettingsProps) => {
  return (
    <Page pageName="Settings">
      <button onClick={() => setSelectedCharacter(null)}>
        Switch Character
      </button>
    </Page>
  );
};
