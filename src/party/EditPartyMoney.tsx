import { ref } from "firebase/database";
import { useContext, useState } from "react";
import styled from "styled-components";
import { database } from "../utils/firebase/Firebase";
import { set } from "../utils/firebase/DataAccess";
import { CharacterContext } from "../DeadlandsCompanion";
import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { useObjectVal } from "react-firebase-hooks/database";
import { Party } from "../utils/types/Party";
import { Spinner } from "../shared/spinner/Spinner";
import { PartyEmptyState } from "./PartyEmptyState";
import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { CenterRow } from "../shared/rows/CenterRow";
import { RowStyle } from "../shared/rows/Row.styled";

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
`;

const AddInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
  width: 175px;
  border-radius: 4px;
  border-width: 1px;
  margin-bottom: 8px;
`;

function setCharacterMoney(characterKey: string, newMoney: number) {
  const moneyRef = ref(database(), `characters/${characterKey}/currency`);
  set(moneyRef, newMoney);
}

function setPartyMoney(partyId: string, newMoney: number) {
  const moneyRef = ref(database(), `parties/${partyId}/currency`);
  set(moneyRef, newMoney);
}

function addMoney(currentMoney: number = 0, addedMoney: number | string = 0) {
  return currentMoney + Number(addedMoney);
}

function spendMoney(currentMoney: number = 0, spentMoney: number | string = 0) {
  return Math.max(currentMoney - Number(spentMoney), 0);
}

function clampMoney(currentMoney: number = 0, spentMoney: number | string = 0) {
  const clampAmount = Math.min(currentMoney, Number(spentMoney));
  if (clampAmount < Number(spentMoney)) {
    alert(
      `Insufficient funds. ${
        currentMoney === 0
          ? `You're dead broke.`
          : `Only $${clampAmount} has been spent.`
      }`
    );
  }
  return clampAmount;
}

export const EditPartyMoney = () => {
  const [newMoneyValue, setNewMoneyValue] = useState<number | "">("");
  const character = useContext(CharacterContext);

  const partyId = character.partyId ?? null;
  const partyRef = ref(database(), `parties/${partyId}`);
  const [party, loading] = useObjectVal<Party>(partyRef);

  const handleNewMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMoneyValue(e.target.value ? Number(e.target.value) : "");
  };

  const handleWithdrawMoney = () => {
    const withdrawAmount = clampMoney(party?.currency, newMoneyValue);

    setCharacterMoney(
      character.id,
      addMoney(character.currency, withdrawAmount)
    );

    setPartyMoney(partyId!, spendMoney(party?.currency, withdrawAmount));

    setNewMoneyValue("");
  };

  const handleDepositMoney = () => {
    const depositAmount = clampMoney(character.currency, newMoneyValue);

    setCharacterMoney(
      character.id,
      spendMoney(character.currency, depositAmount)
    );

    setPartyMoney(partyId!, addMoney(party?.currency, depositAmount));

    setNewMoneyValue("");
  };

  const handleSpendMoney = () => {
    const spendAmount = clampMoney(party?.currency, newMoneyValue);
    setPartyMoney(partyId!, spendMoney(party?.currency, spendAmount));

    setNewMoneyValue("");
  };

  return (
    <Page
      pageName={"Edit party money"}
      prevLocation={{ path: "/party", name: "Cancel" }}
    >
      {loading ? (
        <Spinner />
      ) : !party ? (
        <PartyEmptyState character={character} />
      ) : (
        <div>
          <RowStyle>
            <CenterRow>
              <b>{`${party.name}'s money:`}</b>
              <b>{`$${party.currency ?? 0}`}</b>
            </CenterRow>
          </RowStyle>
          <RowStyle>
            <CenterRow>
              <div>{`${getCharacterFullName(character)}'s money:`}</div>
              <div>{`$${character.currency ?? 0}`}</div>
            </CenterRow>
          </RowStyle>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <InputLabel>
              <AddInput
                type="number"
                id="newMoney"
                name="newMoney"
                placeholder="Enter changed value"
                autoComplete="off"
                value={newMoneyValue ?? ""}
                onChange={handleNewMoneyChange}
              />
              <div style={{ display: "flex", gap: "16px" }}>
                <Button
                  text={"Deposit money"}
                  onClick={handleDepositMoney}
                ></Button>
                <Button
                  text={"Withdraw money"}
                  secondary
                  onClick={handleWithdrawMoney}
                ></Button>
                <Button
                  text={"Spend money"}
                  negative
                  onClick={handleSpendMoney}
                ></Button>
              </div>
            </InputLabel>
          </div>
        </div>
      )}
    </Page>
  );
};
