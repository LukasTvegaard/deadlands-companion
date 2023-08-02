import { NavigateBackRoute } from "../shared/buttons/BackButton";

export enum LocationKey {
  CharacterMenu = "CharacterMenu",
  CharacterSheet = "CharacterSheet",
  CodexMenu = "CodexMenu",
  EdgePage = "EdgePage",
  Back = "Back",
}

export type Locationable = {
  locationKey: LocationKey;
};

export type Location = {
  path: string;
  name: string;
};
export const Locations: Record<LocationKey, Location> = {
  [LocationKey.CharacterMenu]: {
    path: `/character`,
    name: "Menu",
  },
  [LocationKey.CharacterSheet]: {
    path: `/character/sheet`,
    name: "Sheet",
  },
  [LocationKey.CodexMenu]: { path: "/codex", name: "Codex" },
  [LocationKey.EdgePage]: { path: "/codex/edges", name: "Edges" },
  [LocationKey.Back]: { path: NavigateBackRoute, name: "Back" },
};

export const getPrevLocationFromURLParams = (
  urlParams: URLSearchParams
): Location | undefined => {
  const prevLocationKey = urlParams.get("prevLocation");
  if (prevLocationKey) {
    return Locations[prevLocationKey as LocationKey];
  }
};
