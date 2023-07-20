import { useState } from "react";
import { auth, database } from "../utils/firebase/Firebase";
import { push, ref, set } from "firebase/database";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Attribute, DieType, Rank } from "../utils/enums";
import { Edge } from "../utils/enums/Edge";
import Page from "../shared/page/Page";

// READ IF SAME PARTY, WRITE IF OWNER OR GM
type CreateCharacterInput = {
  firstName: string;
  lastName: string;
};
function createCharacter(
  { firstName, lastName }: CreateCharacterInput,
  navigate: NavigateFunction
): void {
  const db = database();
  const characterListRef = ref(db, "characters");
  const newCharacterRef = push(characterListRef);
  set(newCharacterRef, {
    ownerId: auth().currentUser?.uid,
    firstName: firstName,
    lastName: lastName,
    rank: Rank.Novice,
    pace: 6,
    currentPowerPoints: 0,
    wounds: 0,
    fatigue: 0,
    shaken: false,
    currency: 0,
    attributes: {
      [Attribute.Agility]: DieType.D6,
      [Attribute.Smarts]: DieType.D6,
      [Attribute.Spirit]: DieType.D6,
      [Attribute.Strength]: DieType.D6,
      [Attribute.Vigor]: DieType.D6,
    },
    skills: {},
    edges: {
      [Edge.ArcaneBackgroundMagic]: true,
      [Edge.PowerPoints_novice]: true,
      [Edge.PowerPoints_seasoned]: true,
    },
    hindrances: {},
    weapons: {},
    powers: {},
    gear: {},
    effects: {},
  });

  navigate("/character");
}

export const CreateCharacter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <Page
      pageName={"Create Character"}
      prevLocation={{ path: "/", name: "Cancel" }}
    >
      <div>Name your character</div>
      <label>
        First name:{" "}
        <input
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <button
        onClick={() => createCharacter({ firstName, lastName }, navigate)}
      >
        Create Character
      </button>
    </Page>
  );
};
