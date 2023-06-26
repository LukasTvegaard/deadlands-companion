import { PageHeader } from "../shared/PageHeader";

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
        prevLocation={{
          path: `/character`,
          name: "Character Menu",
        }}
      />
      <button onClick={() => setSelectedCharacter(null)}>
        Switch Character
      </button>
    </>
  );
};
