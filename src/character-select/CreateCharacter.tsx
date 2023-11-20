import { push, ref } from "firebase/database";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { Attribute, DieType, Rank } from "../utils/enums";
import { auth, database } from "../utils/firebase/Firebase";
import { styled } from "styled-components";
import { Checkbox } from "../shared/buttons/Checkbox";
import { set } from "../utils/firebase/DataAccess";
import { Character } from "../utils/types/Character";

type SetCharacterInput = Omit<Character, "id">;

// READ IF SAME PARTY, WRITE IF OWNER OR GM
type CreateCharacterInput = {
  firstName: string;
  lastName: string;
  isDM: boolean;
};
function createCharacter(
  { firstName, lastName, isDM }: CreateCharacterInput,
  navigate: NavigateFunction
): void {
  const currentUserId = auth().currentUser?.uid;
  const db = database();
  const characterListRef = ref(db, "characters");
  const newCharacterRef = push(characterListRef);
  if (currentUserId) {
    set<SetCharacterInput>(newCharacterRef, {
      ownerId: currentUserId,
      isDM: isDM,
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
    });
  }

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
  const [isDM, setIsDM] = useState(false);

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
        <Checkbox isSelected={isDM} onChange={setIsDM}>
          DM Profile
        </Checkbox>
        <Button
          text="Create Character"
          onClick={() =>
            createCharacter({ firstName, lastName, isDM }, navigate)
          }
        ></Button>
      </CreateCharacterStyle>
    </Page>
  );
};
