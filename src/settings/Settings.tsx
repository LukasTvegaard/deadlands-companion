import { styled } from "styled-components";
import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { signOutWithGoogle } from "../utils/firebase/Firebase";
import { useContext, useState } from "react";
import { CharacterContext } from "../DeadlandsCompanion";
import { DeleteCharacterModal } from "./DeleteCharacterModal";
import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { Locations } from "../utils/Location";

const SettingsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

type SettingsProps = {
  setSelectedCharacter: (characterId: string | null) => void;
};
export const Settings = ({ setSelectedCharacter }: SettingsProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const character = useContext(CharacterContext);
  return (
    <Page pageName="Settings" prevLocation={Locations.Back}>
      {showDeleteModal ? (
        <DeleteCharacterModal
          setSelectedCharacter={setSelectedCharacter}
          setShowDeleteModal={setShowDeleteModal}
        />
      ) : null}
      <SettingsStyle>
        {`Current character: ${getCharacterFullName(character)}`}
        <Button
          text={"Switch Character"}
          onClick={() => setSelectedCharacter(null)}
        ></Button>
        <Button
          text={"Update App"}
          onClick={() => window.location.reload()}
        ></Button>
        <Button
          secondary
          text={"Sign Out"}
          onClick={signOutWithGoogle}
        ></Button>

        <Button
          text={"Delete Character"}
          negative
          onClick={() => setShowDeleteModal(true)}
        ></Button>
      </SettingsStyle>
    </Page>
  );
};
