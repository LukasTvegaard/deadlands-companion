import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CharacterSelect } from "./CharacterSelect";
import { CreateCharacter } from "./CreateCharacter";

type CharacterSelectRouterProps = {
  userId: string;
  setSelectedCharacterId: (characterId: string | null) => void;
};
export const CharacterSelectRouter = ({
  userId,
  setSelectedCharacterId,
}: CharacterSelectRouterProps) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/create" element={<CreateCharacter />} />
        <Route
          index
          path="/*"
          element={
            <CharacterSelect
              userId={userId}
              setSelectedCharacterId={setSelectedCharacterId}
            />
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};
