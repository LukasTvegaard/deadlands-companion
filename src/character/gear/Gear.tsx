import styled from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Money } from "./Money";
import EditableItemEntry from "./EditableItemEntry";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { Icons } from "../../icons/Icons";
import { addCustomItem } from "./CustomItemService";
import { IconButton } from "../../shared/buttons/IconButton";

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
        <IconButton icon={Icons.Add} onClick={addItem} />
      </TitleRow>
      <GearListWrapper>
        {items.map((item) => (
          <EditableItemEntry key={item.id} item={item} />
        ))}
      </GearListWrapper>
    </Page>
  );
};
