import { equalTo, orderByChild, query, ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { PageHeader } from "../shared/PageHeader";
import { database } from "../utils/firebase/firebase";
import { StyledLink } from "../shared/StyledLink";
import { PageWrapper } from "../codex/PageStyles.styled";

export const CurrentCharacterStorageKey = "current-character-id";

type CharacterSelectProps = {
  userId: string;
  setSelectedCharacterId: (characterId: string | null) => void;
};
export const CharacterSelect = ({
  userId,
  setSelectedCharacterId,
}: CharacterSelectProps) => {
  const charactersRef = query(
    ref(database, "characters"),
    orderByChild("ownerId"),
    equalTo(userId)
  );
  const [snapshots, loading, error] = useList(charactersRef);

  return (
    <PageWrapper>
      <PageHeader pageName={"Character Select"} />
      {snapshots?.map((v) => {
        const character = v.val();
        return (
          <div key={v.key} onClick={() => setSelectedCharacterId(v.key)}>
            {`id: ${v.key} - ownerId: ${character.ownerId} - First name: ${character.firstName}`}
          </div>
        );
      })}
      <StyledLink to={"create"}>
        <button>Create new character</button>
      </StyledLink>
    </PageWrapper>
  );
};