import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import { CharacterMenu } from "./character/CharacterMenu";
import { CharacterSheet } from "./character/CharacterSheet";
import { CodexMenu } from "./codex/CodexMenu";
import { EdgeDetailPage } from "./codex/EdgeDetailPage";
import { EdgePage } from "./codex/EdgePage";
import { Footer } from "./Footer";
import { Character } from "./utils/types/Character";
import { ref } from "firebase/database";
import { database } from "./utils/firebase/firebase";
import { useObjectVal } from "react-firebase-hooks/database";
import { selectedCharacterKey } from "./App";
import { PageWrapper } from "./codex/PageStyles.styled";
import { CharacterSettings } from "./character/CharacterSettings";

export const CharacterContext = React.createContext<Character | undefined>(
  undefined
);

type DeadlandsCompanionProps = {
  selectedCharacterId: string;
  setSelectedCharacter: (characterId: string | null) => void;
};
export const DeadlandsCompanion = ({
  selectedCharacterId,
  setSelectedCharacter,
}: DeadlandsCompanionProps) => {
  const charactersRef = ref(database, `characters/${selectedCharacterId}`);
  const [character, loading] = useObjectVal<Character>(charactersRef);

  if (!loading && !character) {
    localStorage.removeItem(selectedCharacterKey);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/*"
        element={
          <>
            <PageWrapper>
              <Outlet />
            </PageWrapper>
            <Footer />
          </>
        }
      >
        <Route path="character/*">
          <Route index element={<CharacterMenu />} />
          <Route path="sheet" element={<CharacterSheet />} />
          <Route
            path="settings"
            element={
              <CharacterSettings setSelectedCharacter={setSelectedCharacter} />
            }
          />
        </Route>
        <Route path="party/*" element={<div>Party</div>} />
        <Route path="codex/*">
          <Route index element={<CodexMenu />}></Route>
          <Route path="edges" element={<EdgePage />}></Route>
          <Route path="edges/:id" element={<EdgeDetailPage />} />
          <Route path="hindrances" element={<h2>Hindrances</h2>}></Route>
          <Route path="powers" element={<h2>Powers</h2>}></Route>
          <Route path="weapons" element={<h2>Weapons</h2>}></Route>
        </Route>
        <Route index element={<Navigate to={`/character`} />}></Route>
      </Route>
    )
  );

  return !character && loading ? (
    <div>Loading</div>
  ) : (
    <CharacterContext.Provider value={character}>
      <RouterProvider router={router} />
    </CharacterContext.Provider>
  );
};
