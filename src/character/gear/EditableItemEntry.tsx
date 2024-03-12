import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Theme } from "../../Theme";
import { CustomItem } from "../../utils/types/CustomItem";
import { Modal } from "react-aria-components";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Button } from "../../shared/buttons/Button";
import { useLongPress } from "use-long-press";
import { deleteCustomitem } from "./CustomItemService";
import EditCustomItem from "./EditCustomItem";

const EditableItemEntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${Theme.Surface[300]};
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1em;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  justify-content: space-between;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  justify-content: flex-end;
`;

type EditableItemEntryProps = {
  item: CustomItem;
};
const EditableItemEntry: React.FC<EditableItemEntryProps> = ({ item }) => {
  const characterContext = useContext(CharacterContext);
  const [editable, setIsEditable] = useState(false);
  const [expanded, setIsExpanded] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const deleteItem = () => {
    deleteCustomitem(characterContext.id, item.id);
  };

  const longPressHandler = useLongPress(() => {
    setShowDeletionModal(true);
  });

  const deletionConfirmationModal = (
    <Modal
      isOpen={showDeletionModal}
      onOpenChange={setShowDeletionModal}
      isDismissable
    >
      <ModalContents>
        <div>Delete "{item.title}"?</div>
        <ButtonsWrapper>
          <Button text="Cancel" onClick={() => setShowDeletionModal(false)} />
          <Button
            customcolor={Theme.Error[100]}
            text="Yes"
            onClick={deleteItem}
          />
        </ButtonsWrapper>
      </ModalContents>
    </Modal>
  );

  return (
    <EditableItemEntryWrapper
      {...longPressHandler()}
      onClick={() => setIsExpanded(!expanded)}
    >
      {deletionConfirmationModal}
      <ItemWrapper>
        {editable ? (
          <EditCustomItem
            characterId={characterContext.id}
            item={item}
            exitEditMode={() => setIsEditable(false)}
          />
        ) : (
          <ItemWrapper>
            <ItemTitle>{item.title}</ItemTitle>
            {expanded && <div>{item.description}</div>}
            {expanded && (
              <Button
                text="Edit"
                onClick={() => {
                  setIsEditable(!editable);
                }}
              />
            )}
          </ItemWrapper>
        )}
      </ItemWrapper>
    </EditableItemEntryWrapper>
  );
};
export default EditableItemEntry;
