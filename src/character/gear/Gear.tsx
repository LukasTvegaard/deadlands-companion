import styled, { css } from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Money } from "./Money";
import EditableItemEntry from "./EditableItemEntry";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { Theme } from "../../Theme";
import { CustomItemData } from "../../utils/types/CustomItem";
import { push, ref } from "firebase/database";
import { database } from "../../utils/firebase/Firebase";
import { addCustomItem } from "./CustomItemService";

const GearListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  button {
    padding: 4px;
    border-radius: 4px;
    border: none;
    background-color: transparent;
  }
`;

export const Gear = () => {
  const characterContext = useContext(CharacterContext);

  const mapToItemList = () => {
    if (characterContext.customItems) {
      return Object.entries(characterContext.customItems).map(([id, item]) => {
        return { ...item, id };
      });
    }
    return [];
  };

  const items = mapToItemList();

  const addItem = () => {
    addCustomItem(characterContext.id);
  };

  return (
    <Page pageName="Gear" prevLocation={Locations.CharacterMenu}>
      <Money />
      <TitleRow>
        <h4>Gear</h4>
      </TitleRow>
      Coming soon...
      <TitleRow>
        <h4>Custom Items</h4>
        <button onClick={addItem}>
          <Icon icon={Icons.Add} height={24} width={24} />
        </button>
      </TitleRow>
      <GearListWrapper>
        {items.map((item) => (
          <EditableItemEntry key={item.id} item={item} />
        ))}
      </GearListWrapper>
    </Page>
  );
};
