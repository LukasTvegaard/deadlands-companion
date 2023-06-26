import { useState } from "react";
import { PageHeader } from "../shared/PageHeader";
import { auth, database } from "../utils/firebase/firebase";
import { push, ref, set } from "firebase/database";
import { NavigateFunction, useNavigate } from "react-router-dom";

// READ IF SAME PARTY, WRITE IF OWNER OR GM
type CreateCharacterInput = {
  firstName: string;
  lastName: string;
};
function createCharacter(
  { firstName, lastName }: CreateCharacterInput,
  navigate: NavigateFunction
): void {
  const db = database;
  const characterListRef = ref(db, "characters");
  const newCharacterRef = push(characterListRef);
  console.log(db, newCharacterRef.key);
  set(newCharacterRef, {
    ownerId: auth.currentUser?.uid,
    firstName: firstName,
    lastName: lastName,
  });
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
    <>
      <PageHeader
        pageName={"Create Character"}
        prevLocation={{ path: "/", name: "Cancel" }}
      />
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
    </>
  );
};
