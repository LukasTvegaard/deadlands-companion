import { push, ref, set } from "firebase/database";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { Attribute, DieType, Rank } from "../utils/enums";
import { auth, database } from "../utils/firebase/Firebase";
import { styled } from "styled-components";

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
    edges: {},
    hindrances: {},
    weapons: {},
    powers: {},
    gear: {},
    effects: {},
  });

  navigate("/character");
}

const CreateCharacterStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeaderText = styled.div`
  font-size: 20px;
  font-family: Rye;
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CharacterInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
`;

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
      <CreateCharacterStyle>
        <HeaderText>Name your character</HeaderText>
        <InputLabel>
          <label htmlFor="firstName">First name</label>
          <CharacterInput
            id="firstName"
            name="firstName"
            autoFocus
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </InputLabel>

        <InputLabel>
          <label htmlFor="lastName">Last name</label>
          <CharacterInput
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </InputLabel>
        <Button
          text="Create Character"
          onClick={() => createCharacter({ firstName, lastName }, navigate)}
        ></Button>
      </CreateCharacterStyle>
    </Page>
  );
};
