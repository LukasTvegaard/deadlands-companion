export type CustomItem = {
  id: string;
  title: string;
  description: string;
};

export type CustomItemData = Omit<CustomItem, "id">;
