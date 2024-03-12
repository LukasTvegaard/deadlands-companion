import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../Theme";
import { CustomItem, CustomItemData } from "../../utils/types/CustomItem";
import { Modal, TextArea } from "react-aria-components";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Button } from "../../shared/buttons/Button";
import { useLongPress } from "use-long-press";
import { deleteCustomitem, updateCustomItem } from "./CustomItemService";

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

const StyledInput = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: none;
`;

type EditableItemEntryProps = {
  item: CustomItem;
};
const EditableItemEntry: React.FC<EditableItemEntryProps> = ({ item }) => {
  const characterContext = useContext(CharacterContext);
  const [editable, setIsEditable] = useState(false);
  const [expanded, setIsExpanded] = useState(false);
  const [editedName, setEditedName] = useState(item.title);
  const [editedDesc, setEditedDesc] = useState(item.description);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  useEffect(() => {
    if (item.title !== editedName) setEditedName(item.title);
  }, [item.title]);

  const commitEdit = (newName: string, newDesc: string) => {
    setIsEditable(false);
    const updatedItem: CustomItemData = {
      title: newName,
      description: newDesc,
    };
    updateCustomItem(characterContext.id, item.id, updatedItem);
  };

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
          <ItemWrapper>
            <label htmlFor="itemTitle">Title</label>
            <StyledInput
              id="itemTitle"
              name="itemTitle"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <label htmlFor="itemDescription">Description</label>
            <TextArea
              id="itemDescription"
              name="itemDescription"
              value={editedDesc}
              onChange={(e) => setEditedDesc(e.target.value)}
            />
          </ItemWrapper>
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
      {editable && (
        <ButtonsWrapper>
          <Button
            text="Cancel"
            customcolor={Theme.Error[100]}
            onClick={() => {
              setIsEditable(!editable);
            }}
          />
          <Button
            text="Save"
            customcolor={Theme.Stamina}
            onClick={() => {
              commitEdit(editedName, editedDesc);
            }}
          />
        </ButtonsWrapper>
      )}
    </EditableItemEntryWrapper>
  );
};
export default EditableItemEntry;
