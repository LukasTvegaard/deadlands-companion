import React, { useState } from "react";
import { TextArea } from "react-aria-components";
import styled from "styled-components";
import { Theme } from "../../Theme";
import { CustomItem, CustomItemData } from "../../utils/types/CustomItem";
import { updateCustomItem } from "./CustomItemService";
import { Button } from "../../shared/buttons/Button";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: none;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 4px;
  border-radius: 8px;
  justify-content: flex-end;
`;

type EditCustomItemProps = {
  characterId: string;
  item: CustomItem;
  exitEditMode: () => void;
};
const EditCustomItem: React.FC<EditCustomItemProps> = ({
  characterId,
  item,
  exitEditMode,
}) => {
  const [editedName, setEditedName] = useState(item.title);
  const [editedDesc, setEditedDesc] = useState(item.description);

  const commitEdit = (newName: string, newDesc: string) => {
    exitEditMode();
    const updatedItem: CustomItemData = {
      title: newName,
      description: newDesc,
    };
    updateCustomItem(characterId, item.id, updatedItem);
  };
  return (
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
      <ButtonsWrapper>
        <Button
          text="Cancel"
          customcolor={Theme.Error[100]}
          onClick={exitEditMode}
        />
        <Button
          text="Save"
          customcolor={Theme.Stamina}
          onClick={() => {
            commitEdit(editedName, editedDesc);
          }}
        />
      </ButtonsWrapper>
    </ItemWrapper>
  );
};
export default EditCustomItem;
