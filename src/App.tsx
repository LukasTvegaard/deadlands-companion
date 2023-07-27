import { useEffect, useState } from "react";
import { Login } from "./Login";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase/Firebase";
import { styled } from "styled-components";
import { DeadlandsCompanion } from "./DeadlandsCompanion";
import { CharacterSelectRouter } from "./character-select/CharacterSelectRouter";
import { Spinner } from "./shared/spinner/Spinner";

const AppContentArranger = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const selectedCharacterKey = "latest-selected-character-id";

function App() {
  const [appLoading, setAppLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    localStorage.getItem(selectedCharacterKey)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth(), (user) => {
      setUser(user);
      setAppLoading(false);
    });

    return unsubscribe;
  }, []);

  const setSelectedCharacter = (characterId: string | null) => {
    setSelectedCharacterId(characterId);

    if (characterId) {
      localStorage.setItem(selectedCharacterKey, characterId);
    } else {
      localStorage.removeItem(selectedCharacterKey);
    }
  };

  return (
    <AppContentArranger>
      {appLoading ? (
        <Spinner showHeader />
      ) : user ? (
        selectedCharacterId ? (
          <DeadlandsCompanion
            selectedCharacterId={selectedCharacterId}
            setSelectedCharacter={setSelectedCharacter}
          />
        ) : (
          <CharacterSelectRouter
            userId={user.uid}
            setSelectedCharacterId={setSelectedCharacter}
          />
        )
      ) : (
        <Login />
      )}
    </AppContentArranger>
  );
}

export default App;
