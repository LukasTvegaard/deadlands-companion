export enum Rank {
  Novice = "NOVICE",
  Seasoned = "SEASONED",
  Veteran = "VETERAN",
  Heroic = "HEROIC",
  Legendary = "LEGENDARY",
}

export const rankToValue = (rank: Rank) => {
  switch (rank) {
    case Rank.Novice:
      return 1;
    case Rank.Seasoned:
      return 2;
    case Rank.Veteran:
      return 3;
    case Rank.Heroic:
      return 4;
    case Rank.Legendary:
      return 5;
  }
};
