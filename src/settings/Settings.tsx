import Page from "../shared/page/Page";
import { signOutWithGoogle } from "../utils/firebase/Firebase";

type SettingsProps = {
  setSelectedCharacter: (characterId: string | null) => void;
};
export const Settings = ({ setSelectedCharacter }: SettingsProps) => {
  return (
    <Page pageName="Settings">
      <button onClick={() => setSelectedCharacter(null)}>
        Switch Character
      </button>
      <button onClick={signOutWithGoogle}>Sign Out</button>
    </Page>
  );
};
