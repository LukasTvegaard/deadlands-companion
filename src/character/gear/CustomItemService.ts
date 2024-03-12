import { push, ref, remove, set } from "firebase/database";
import { database } from "../../utils/firebase/Firebase";
import { CustomItemData } from "../../utils/types/CustomItem";

const API_ROOT = (characterId: string) =>
  `characters/${characterId}/customItems`;

export const addCustomItem = async (characterId: string) => {
  const itemToCreate: CustomItemData = {
    title: "New Item",
    description: "",
  };
  const db = database();
  const path = API_ROOT(characterId);
  push(ref(db, path), itemToCreate);
};

export const deleteCustomitem = async (characterId: string, itemId: string) => {
  const db = database();
  const itemPath = `${API_ROOT(characterId)}/${itemId}`;
  remove(ref(db, itemPath));
};

export const updateCustomItem = async (
  characterId: string,
  itemId: string,
  itemData: CustomItemData
) => {
  const db = database();
  const itemPath = `${API_ROOT(characterId)}/${itemId}`;
  set(ref(db, itemPath), itemData);
};
