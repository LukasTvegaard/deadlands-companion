import styled from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Money } from "./Money";
import EditableItemEntry from "./EditableItemEntry";

const GearListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Gear = () => {
  const items = [
    "Ammo",
    "Weapons",
    "Armor",
    "Clothing",
    "Tools",
    "Consumables",
    "Miscellaneous",
  ];

  const onUpdateItem = (name: string) => {};

  return (
    <Page pageName="Gear" prevLocation={Locations.CharacterMenu}>
      <Money />
      Coming soon...
      <h4>Gear List</h4>
      <GearListWrapper>
        {items.map((item) => (
          <EditableItemEntry name={item} onNameChange={onUpdateItem} />
        ))}
      </GearListWrapper>
    </Page>
  );
};
