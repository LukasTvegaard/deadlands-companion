import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import { selectedCharacterKey } from "./App";
import { CharacterSheet } from "./character/character-sheet/CharacterSheet";
import { EditAttributes } from "./character/character-sheet/edit/EditAttributes";
import { EditInfo } from "./character/character-sheet/edit/EditInfo";
import { EditResources } from "./character/character-sheet/edit/EditResources";
import { EditSkills } from "./character/character-sheet/edit/EditSkills";
import { RollHelper } from "./character/character-sheet/RollHelper";
import { CharacterMenu } from "./character/CharacterMenu";
import { EdgesAndHindrances } from "./character/edges-hindrances/EdgesAndHindrances";
import { Gear } from "./character/gear/Gear";
import { Weapons } from "./character/weapons/Weapons";
import { CodexMenu } from "./codex/CodexMenu";
import { EdgeDetailPage } from "./codex/edges/EdgeDetailPage";
import { EdgePage } from "./codex/edges/EdgePage";
import { HindranceDetailPage } from "./codex/Hindrances/HindranceDetailPage";
import { HindrancePage } from "./codex/Hindrances/HindrancePage";
import { WeaponDetailPage } from "./codex/weapons/WeaponDetailPage";
import { WeaponPage } from "./codex/weapons/WeaponPage";
import { Footer } from "./Footer";
import { CreateParty } from "./party/CreateParty";
import { EditCampSupplies } from "./party/EditCampSupplies";
import { EditParty } from "./party/EditParty";
import { PartyOverview } from "./party/PartyOverview";
import { Settings } from "./settings/Settings";
import { Spinner } from "./shared/spinner/Spinner";
import { database } from "./utils/firebase/Firebase";
import { Character } from "./utils/types/Character";
import { useScrollRestoration } from "./utils/useScrollRestoration";
import { EditMoney } from "./character/gear/EditMoney";
import { Powers } from "./character/powers/Powers";
import { PowerPage } from "./codex/powers/PowerPage";
import { PowerDetailPage } from "./codex/powers/PowerDetailPage";

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
            <Route path="powers" element={<Powers />} />
            <Route path="gear" element={<Gear />} />
            <Route path="gear/money" element={<EditMoney />} />
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
          <Route path="powers" element={<PowerPage />} />
          <Route path="powers/:id" element={<PowerDetailPage />} />
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
