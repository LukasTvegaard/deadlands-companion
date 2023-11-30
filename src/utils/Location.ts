import { NavigateBackRoute } from "../shared/buttons/BackButton";

export enum LocationKey {
  CharacterMenu = "CharacterMenu",
  CharacterSheet = "CharacterSheet",
  CharacterEdgeHindrance = "CharacterEdgeHindrance",
  CharacterWeapon = "CharacterWeapon",
  CharacterPower = "CharacterPower",
  CodexMenu = "CodexMenu",
  EdgePage = "EdgePage",
  HindrancePage = "HindrancePage",
  WeaponPage = "WeaponPage",
  PowerPage = "PowerPage",
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
  [LocationKey.CharacterEdgeHindrance]: {
    path: `/character/edges`,
    name: "Edges & Hindrances",
  },
  [LocationKey.CharacterWeapon]: {
    path: `/character/weapons`,
    name: "Weapons",
  },
  [LocationKey.CharacterPower]: {
    path: `/character/powers`,
    name: "Powers",
  },
  [LocationKey.CodexMenu]: { path: "/codex", name: "Codex" },
  [LocationKey.EdgePage]: { path: "/codex/edges", name: "Edges" },
  [LocationKey.HindrancePage]: {
    path: "/codex/hindrances",
    name: "Hindrances",
  },
  [LocationKey.WeaponPage]: {
    path: "/codex/weapons",
    name: "Weapons",
  },
  [LocationKey.PowerPage]: {
    path: "/codex/powers",
    name: "Powers",
  },
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
