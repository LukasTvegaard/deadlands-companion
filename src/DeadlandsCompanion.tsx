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
import { EdgeDetailPage } from "./codex/edges/EdgeDetailPage";
import { EdgePage } from "./codex/edges/EdgePage";
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
import { EdgesAndHindrances } from "./character/edges-hindrances/EdgesAndHindrances";
import { HindrancePage } from "./codex/hindrances/HindrancePage";
import { HindranceDetailPage } from "./codex/hindrances/HindranceDetailPage";
import { WeaponPage } from "./codex/weapons/WeaponPage";
import { WeaponDetailPage } from "./codex/weapons/WeaponDetailPage";
import { Weapons } from "./character/weapons/Weapons";
import { PartyOverview } from "./party/PartyOverview";
import { CreateParty } from "./party/CreateParty";
import { EditParty } from "./party/EditParty";
import { EditCampSupplies } from "./party/EditCampSupplies";

export const CharacterContext = React.createContext<Character>({} as Character); // Little bit of a hack since CharacterContext is only ever used with a defined Character value.

const Layout = ({ isDM }: { isDM?: boolean }) => {
  useScrollRestoration();
  return (
    <>
      <Outlet />
      <Footer isDM={isDM} />
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

  const characterIsDM = character?.isDM;

  if (!loading && !character?.attributes) {
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
        element={<Layout isDM={characterIsDM} />}
      >
        {characterIsDM ? null : (
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
            <Route path="edges" element={<EdgesAndHindrances />} />
            <Route path="weapons" element={<Weapons />} />
            <Route path="*" element={<div>Under construction...</div>} />
          </Route>
        )}
        <Route path="party/*">
          <Route path="create" element={<CreateParty />} />
          <Route path="edit" element={<EditParty />} />
          <Route path="camp-supplies/edit" element={<EditCampSupplies />} />
          <Route path=":id/resource" element={<EditResources />} />
          <Route index path="*" element={<PartyOverview />} />
        </Route>
        <Route path="codex/*">
          <Route index element={<CodexMenu />}></Route>
          <Route path="edges" element={<EdgePage />}></Route>
          <Route path="edges/:id" element={<EdgeDetailPage />} />
          <Route path="hindrances" element={<HindrancePage />} />
          <Route path="hindrances/:id" element={<HindranceDetailPage />} />
          <Route path="powers" element={<h2>Powers</h2>} />
          <Route path="weapons" element={<WeaponPage />} />
          <Route path="weapons/:id" element={<WeaponDetailPage />} />
        </Route>
        <Route
          path="settings"
          element={<Settings setSelectedCharacter={setSelectedCharacter} />}
        />
        <Route
          index
          path="*"
          element={<Navigate to={characterIsDM ? `/party` : `/character`} />}
        ></Route>
      </Route>
    )
  );

  return !character?.attributes ? (
    <Spinner showHeader />
  ) : (
    <CharacterContext.Provider value={character}>
      <RouterProvider router={router} />
    </CharacterContext.Provider>
  );
};
