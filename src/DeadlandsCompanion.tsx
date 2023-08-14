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
import { CharacterSheet } from "./character/character-sheet/CharacterSheet";
import { CodexMenu } from "./codex/CodexMenu";
import { EdgeDetailPage } from "./codex/EdgeDetailPage";
import { EdgePage } from "./codex/EdgePage";
import { Footer } from "./Footer";
import { Character } from "./utils/types/Character";
import { ref } from "firebase/database";
import { database } from "./utils/firebase/Firebase";
import { useObjectVal } from "react-firebase-hooks/database";
import { selectedCharacterKey } from "./App";
import { Settings } from "./settings/Settings";
import { EditAttributes } from "./character/character-sheet/edit/EditAttributes";
import { EditSkills } from "./character/character-sheet/edit/EditSkills";
import { EditResources } from "./character/character-sheet/edit/EditResources";
import { Spinner } from "./shared/spinner/Spinner";
import { RollHelper } from "./character/character-sheet/RollHelper";
import { EditInfo } from "./character/character-sheet/edit/EditInfo";
import { useScrollRestoration } from "./utils/useScrollRestoration";

export const CharacterContext = React.createContext<Character>({} as Character); // Little bit of a hack since CharacterContext is only ever used with a defined Character value.

const Layout = () => {
  useScrollRestoration();
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

type DeadlandsCompanionProps = {
  selectedCharacterId: string;
  setSelectedCharacter: (characterId: string | null) => void;
};
export const DeadlandsCompanion = ({
  selectedCharacterId,
  setSelectedCharacter,
}: DeadlandsCompanionProps) => {
  const charactersRef = ref(database(), `characters/${selectedCharacterId}`);
  const [character, loading] = useObjectVal<Character>(charactersRef, {
    transform: (val) => ({ ...val, id: selectedCharacterId }),
  });

  if (!loading && !character) {
    localStorage.removeItem(selectedCharacterKey);
    window.location.reload();
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/*"
        loader={async () => {
          return null;
        }}
        element={<Layout />}
      >
        <Route path="character/*">
          <Route index element={<CharacterMenu />} />
          <Route path="sheet" element={<CharacterSheet />} />
          <Route path="sheet/roll/:id" element={<RollHelper />} />
          <Route path="sheet/edit/*">
            <Route path="info" element={<EditInfo />} />
            <Route path="attribute" element={<EditAttributes />} />
            <Route path="skill" element={<EditSkills />} />
            <Route path="resource" element={<EditResources />} />
          </Route>
          <Route path="*" element={<div>Under construction...</div>}></Route>
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
        <Route
          path="settings"
          element={<Settings setSelectedCharacter={setSelectedCharacter} />}
        />
        <Route index element={<Navigate to={`/character`} />}></Route>
      </Route>
    )
  );

  return !character ? (
    <Spinner showHeader />
  ) : (
    <CharacterContext.Provider value={character}>
      <RouterProvider router={router} />
    </CharacterContext.Provider>
  );
};
