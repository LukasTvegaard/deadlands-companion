import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";
type EditableItemEntryStyleProps = {};
const EditableItemEntryWrapper = styled.div<EditableItemEntryStyleProps>``;
type EditableItemEntryProps = {
  name: string;
  onNameChange: (name: string) => void;
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
`;

const EditableItemEntry: React.FC<EditableItemEntryProps> = ({ name }) => {
  const [editable, setIsEditable] = useState(false);
  const [editedName, setEditableName] = useState(name);

  return (
    <EditableItemEntryWrapper>
      {editable ? (
        <input value={name} onChange={(e) => setEditableName(e.target.value)} />
      ) : (
        <ItemWrapper onClick={() => setIsEditable(!editable)}>
          <div> {name}</div>
          <Icon
            icon={Icons.Pen}
            height={24}
            width={24}
            color={Theme.Surface[400]}
          />
        </ItemWrapper>
      )}
    </EditableItemEntryWrapper>
  );
};
export default EditableItemEntry;
