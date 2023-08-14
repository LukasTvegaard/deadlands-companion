export enum DieType {
  D2 = "D2", // D4-2
  D4 = "D4",
  D6 = "D6",
  D8 = "D8",
  D10 = "D10",
  D12 = "D12",
  D13 = "D13", // D12+1
  D14 = "D14", // D12+2
}

export const dieTypeToValue = (dieType: DieType): number => {
  switch (dieType) {
    case DieType.D2:
    case DieType.D4:
      return 4;
    case DieType.D6:
      return 6;
    case DieType.D8:
      return 8;
    case DieType.D10:
      return 10;
    case DieType.D12:
    case DieType.D13:
    case DieType.D14:
      return 12;
  }
};
