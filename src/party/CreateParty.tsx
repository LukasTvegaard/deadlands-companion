import { push, ref } from "firebase/database";
import { useState, useContext } from "react";

import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { database } from "../utils/firebase/Firebase";
import { styled } from "styled-components";
import { set } from "../utils/firebase/DataAccess";
import { Party } from "../utils/types/Party";
import { CharacterContext } from "../DeadlandsCompanion";

type SetPartyInput = Omit<Party, "id">;

type CreatePartyInput = {
  characterId: string;
  partyName: string;
};
function createParty({ characterId, partyName }: CreatePartyInput): void {
  const db = database();
  const partyListRef = ref(db, "parties");
  const partyIdRef = ref(db, `characters/${characterId}/partyId`);
  const newPartyRef = push(partyListRef);

  if (characterId) {
    set<SetPartyInput>(newPartyRef, {
      ownerId: characterId,
      name: partyName,
      campSupplies: 0,
      hasCarriage: false,
    });
    set(partyIdRef, newPartyRef.key);
  }

  window.location.href = "/party";
}

const CreatePartyStyle = styled.div`
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

const PartyInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
`;

export const CreateParty = () => {
  const character = useContext(CharacterContext);

  const [partyName, setPartyName] = useState("");

  const handlePartyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value);
  };

  return (
    <Page
      pageName={"Create Party"}
      prevLocation={{ path: "/party", name: "Cancel" }}
    >
      <CreatePartyStyle>
        <HeaderText>Name your party</HeaderText>
        <InputLabel>
          <label htmlFor="partyName">Party name</label>
          <PartyInput
            id="partyName"
            name="partyName"
            autoFocus
            value={partyName}
            onChange={handlePartyNameChange}
          />
        </InputLabel>

        <Button
          text="Create Party"
          onClick={() => createParty({ characterId: character.id, partyName })}
        ></Button>
      </CreatePartyStyle>
    </Page>
  );
};
