import React from "react";
import { Character } from "./utils/types/Character";

export const CharacterContext = React.createContext<Character>({} as Character); // Little bit of a hack since CharacterContext is only ever used with a defined Character value.
