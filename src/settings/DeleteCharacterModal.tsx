import { styled } from "styled-components";
import { Theme } from "../Theme";
import { Button } from "../shared/buttons/Button";
import { useContext, useState } from "react";
import { CharacterContext } from "../DeadlandsCompanion";
import { database } from "../utils/firebase/Firebase";
import { ref, remove } from "firebase/database";

type DeleteCharacterInput = {
  characterId: string;
  setSelectedCharacter: (characterId: string | null) => void;
};
async function deleteCharacter({
  characterId,
  setSelectedCharacter,
}: DeleteCharacterInput) {
  const db = database();
  const characterRef = ref(db, `characters/${characterId}`);
  await remove(characterRef);

  setSelectedCharacter(null);
}

const DeleteModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Theme.Surface[300]};
  width: 80%;
  max-width: 350px;
  height: 180px;
  border-radius: 4px;
  padding: 16px;
`;

const DeleteTextInput = styled.input`
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

type DeleteCharacterModalProps = {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCharacter: (characterId: string | null) => void;
};
export const DeleteCharacterModal = ({
  setShowDeleteModal,
  setSelectedCharacter,
}: DeleteCharacterModalProps) => {
  const [validationInputValue, setValidationInputValue] = useState("");
  const character = useContext(CharacterContext);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationInputValue(e.target.value);
  };

  if (!character) {
    return null;
  }

  return (
    <DeleteModalBackdrop>
      <DeleteModal>
        <div>{`You are about the PERMANENTLY delete the character "${character?.firstName} ${character?.lastName}."`}</div>
        <div>Type "delete character" and press delete to confirm.</div>
        <DeleteTextInput autoFocus onChange={onInputChange}></DeleteTextInput>
        <ButtonWrapper>
          <Button text="Cancel" onClick={() => setShowDeleteModal(false)} />
          <Button
            text="Delete"
            negative
            disabled={validationInputValue.toLowerCase() !== "delete character"}
            onClick={() =>
              deleteCharacter({
                characterId: character.id,
                setSelectedCharacter,
              })
            }
          ></Button>
        </ButtonWrapper>
      </DeleteModal>
    </DeleteModalBackdrop>
  );
};
