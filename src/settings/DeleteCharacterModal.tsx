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

const DeleteModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${Theme.Surface[300]};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  height: 130px;
  border-radius: 4px;
  padding: 16px;
  gap: 8px;
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
  const [deleteValidationInputValue, setDeleteValidationInputValue] =
    useState("");
  const character = useContext(CharacterContext);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteValidationInputValue(e.target.value);
  };

  if (!character) {
    return null;
  }

  return (
    <DeleteModal>
      <div>{`You are about the PERMANENTLY delete the character "${character?.firstName} ${character?.lastName}"`}</div>
      <div>Type "delete character" to confirm</div>
      <input
        autoFocus
        placeholder="delete character"
        onChange={onInputChange}
      ></input>
      <ButtonWrapper>
        <Button text="Cancel" onClick={() => setShowDeleteModal(false)} />
        <Button
          text="Delete"
          negative
          disabled={
            deleteValidationInputValue.toLowerCase() !== "delete character"
          }
          onClick={() =>
            deleteCharacter({ characterId: character.id, setSelectedCharacter })
          }
        ></Button>
      </ButtonWrapper>
    </DeleteModal>
  );
};
