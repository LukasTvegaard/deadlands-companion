export type Party = {
  id: string;
  ownerId: string;
  name: string;
  currency?: number;
  campSupplies?: number;
  hasCarriage?: boolean;
};
