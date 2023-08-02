import { equalTo, orderByChild, query, ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { database, signOutWithGoogle } from "../utils/firebase/Firebase";
import { StyledLink } from "../shared/StyledLink";
import Page from "../shared/page/Page";
import { Spinner } from "../shared/spinner/Spinner";
import { Button } from "../shared/buttons/Button";
import { styled } from "styled-components";
import { CharacterTile } from "./CharacterTile";
import { Character } from "../utils/types/Character";
import { useNavigate } from "react-router-dom";

export const CurrentCharacterStorageKey = "current-character-id";

const CharacterSelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

type CharacterSelectProps = {
  userId: string;
  setSelectedCharacterId: (characterId: string | null) => void;
};
export const CharacterSelect = ({
  userId,
  setSelectedCharacterId,
}: CharacterSelectProps) => {
  const charactersRef = query(
    ref(database(), "characters"),
    orderByChild("ownerId"),
    equalTo(userId)
  );
  const [snapshots, loading] = useList(charactersRef);
  const navigate = useNavigate();

  const setSelectedCharacter = (characterId: string | null) => {
    setSelectedCharacterId(characterId);
    navigate("/character");
  };

  return (
    <Page pageName={"Character Select"}>
      {loading ? (
        <Spinner />
      ) : (
        <CharacterSelectStyle>
          {snapshots?.map((v) => {
            const character = v.val() as Character;
            return (
              <CharacterTile
                key={v.key}
                characterKey={v.key}
                character={character}
                setSelectedCharacterId={setSelectedCharacter}
              ></CharacterTile>
            );
          })}
          <StyledLink to={"create"}>
            <Button text="Create new character"></Button>
          </StyledLink>
          <Button text="Sign Out" onClick={signOutWithGoogle}></Button>
        </CharacterSelectStyle>
      )}
    </Page>
  );
};
