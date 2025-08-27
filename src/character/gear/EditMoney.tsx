import { ref } from "firebase/database";
import { useContext, useState } from "react";
import styled from "styled-components";
import { database } from "../../utils/firebase/Firebase";
import { set } from "../../utils/firebase/DataAccess";
import { CharacterContext } from "../../CharacterContext";
import { Button } from "../../shared/buttons/Button";
import Page from "../../shared/page/Page";
import { CenterRow } from "../../shared/rows/CenterRow";

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

function setMoney(characterKey: string, newMoney: number) {
  const moneyRef = ref(database(), `characters/${characterKey}/currency`);
  set(moneyRef, newMoney);
}

function addMoney(currentMoney: number = 0, addedMoney: number | string = 0) {
  return currentMoney + Number(addedMoney);
}

function spendMoney(currentMoney: number = 0, spentMoney: number | string = 0) {
  return Math.max(currentMoney - Number(spentMoney), 0);
}

export const EditMoney = () => {
  const [newMoneyValue, setNewMoneyValue] = useState<number | "">("");
  const character = useContext(CharacterContext);

  const handleNewMoneyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMoneyValue(e.target.value ? Number(e.target.value) : "");
  };

  const handleAddMoney = () => {
    setMoney(character.id, addMoney(character.currency, newMoneyValue));

    setNewMoneyValue("");
  };

  const handleSpendMoney = () => {
    setMoney(character.id, spendMoney(character.currency, newMoneyValue));

    setNewMoneyValue("");
  };

  return (
    <Page
      pageName={"Edit money"}
      prevLocation={{ path: "/character/gear", name: "Cancel" }}
    >
      <div>
        <CenterRow>
          <div>Current money:</div>
          <div>{`$${character.currency}`}</div>
        </CenterRow>
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
              <Button text={"Add money"} onClick={handleAddMoney}></Button>
              <Button
                text={"Spend money"}
                negative
                onClick={handleSpendMoney}
              ></Button>
            </div>
          </InputLabel>
        </div>
      </div>
    </Page>
  );
};
