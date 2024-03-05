export const CampSupplyCostPerPerson = 10;

const CampSupplyCapacityPerPerson = 40;

export function getCampSupplyCapacity(
  partyMemberCount: number,
  hasCarriage: boolean
) {
  return (
    partyMemberCount * CampSupplyCapacityPerPerson + (hasCarriage ? 300 : 0)
  );
}
