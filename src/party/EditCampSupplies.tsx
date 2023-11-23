import { equalTo, orderByChild, query, ref } from "firebase/database";
import { partition } from "lodash";
import { useContext, useState } from "react";
import { useList, useObjectVal } from "react-firebase-hooks/database";
import styled from "styled-components";

import { CharacterContext } from "../DeadlandsCompanion";
import Page from "../shared/page/Page";
import { Spinner } from "../shared/spinner/Spinner";
import { set } from "../utils/firebase/DataAccess";
import { database } from "../utils/firebase/Firebase";
import { snapshotsToValues } from "../utils/firebase/SnapshotFormatter";
import { Character } from "../utils/types/Character";
import { Party } from "../utils/types/Party";
import { CampSupplyCostPerPerson, getCampSupplyCapacity } from "./CampSupplies";
import { Button } from "../shared/buttons/Button";
import { Checkbox } from "../shared/buttons/Checkbox";

const CampSuppliesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 8px;
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
`;

const AddInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
  width: 73px;
`;

function setHasCarriage(hasCarriage: boolean, partyId?: string) {
  if (partyId) {
    const hasCarriageRef = ref(database(), `parties/${partyId}/hasCarriage`);
    set(hasCarriageRef, hasCarriage);
  }
}

function setCampSupplies(
  partyId: string,
  newCampSupplies: number,
  campSupplyCapacity: number
) {
  const campSupplies = Math.min(newCampSupplies, campSupplyCapacity);
  const campSupplyRef = ref(database(), `parties/${partyId}/campSupplies`);
  set(campSupplyRef, campSupplies);
}

function addCampSupplies(
  currentCampSupplies: number = 0,
  addedCampSupplies: number | string = 0
) {
  return currentCampSupplies + Number(addedCampSupplies);
}

function restWithCampSupplies(
  currentCampSupplies: number = 0,
  partyMemberCount: number = 1
) {
  const newCampSupplies =
    currentCampSupplies - CampSupplyCostPerPerson * partyMemberCount;
  if (newCampSupplies < 0) {
    const unsatiatedCharacters = Math.ceil(
      Math.abs(newCampSupplies) / CampSupplyCostPerPerson
    );
    if (
      window.confirm(
        `Your party does not have enough camp supplies to fully rest. ${unsatiatedCharacters} ${
          unsatiatedCharacters === 1 ? "character" : "characters"
        } will not be satiated and must succeed a vigor roll or suffer a level of fatigue`
      )
    ) {
      return 0;
    } else {
      return currentCampSupplies;
    }
  }

  return newCampSupplies;
}

function decayCampSupplies(currentCampSupplies: number) {
  return Math.round(currentCampSupplies / 2);
}

export const EditCampSupplies = () => {
  const [addCampSuppliesValue, setAddCampSuppliesValue] = useState<number | "">(
    ""
  );

  const character = useContext(CharacterContext);
  const partyId = character.partyId;
  const partyRef = ref(database(), `parties/${partyId}`);
  const [party, partyLoading] = useObjectVal<Party>(partyRef);

  const charactersRef = query(
    ref(database(), "characters"),
    orderByChild("isDM"),
    equalTo(false)
  );
  const [charactersSnapshots, partyCharactersLoading] = useList(charactersRef);
  const characters = snapshotsToValues<Character>(charactersSnapshots);

  const [partyCharacters] = partition(characters, (char) => {
    return char.partyId === partyId;
  });

  const partyMemberCount = partyCharacters.length;
  const campSupplies = party?.campSupplies ?? 0;
  const campSupplyCapacity = getCampSupplyCapacity(
    partyMemberCount,
    party?.hasCarriage ?? false
  );

  const handlePartyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddCampSuppliesValue(e.target.value ? Number(e.target.value) : "");
  };

  const handleAddCampSupplies = () => {
    if (partyId) {
      setCampSupplies(
        partyId,
        addCampSupplies(party?.campSupplies, addCampSuppliesValue),
        campSupplyCapacity
      );
    }
    setAddCampSuppliesValue("");
  };

  const handleRestCampSupplies = () => {
    if (partyId) {
      setCampSupplies(
        partyId,
        restWithCampSupplies(campSupplies, partyMemberCount),
        campSupplyCapacity
      );
    }
  };

  const handleDecayCampSupplies = () => {
    if (partyId) {
      setCampSupplies(
        partyId,
        decayCampSupplies(campSupplies),
        campSupplyCapacity
      );
    }
  };

  return (
    <Page
      pageName={"Edit Party Camp Supplies"}
      prevLocation={{ path: "/party", name: "Cancel" }}
    >
      {partyLoading || partyCharactersLoading ? (
        <Spinner />
      ) : party ? (
        <div>
          <CampSuppliesStyle>
            <div>Current Camp Supplies:</div>
            <div>{`${campSupplies} / ${campSupplyCapacity}`}</div>
          </CampSuppliesStyle>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <InputLabel>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <AddInput
                  type="number"
                  id="partyName"
                  name="partyName"
                  autoComplete="off"
                  value={addCampSuppliesValue ?? ""}
                  onChange={handlePartyNameChange}
                />
                {character.isDM ? (
                  <Checkbox
                    childrenLeft
                    isSelected={party.hasCarriage}
                    onChange={(isSelected) =>
                      setHasCarriage(isSelected, partyId)
                    }
                  >
                    Party has carriage
                  </Checkbox>
                ) : null}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  text={"Add camp supplies"}
                  onClick={handleAddCampSupplies}
                ></Button>
                <Button
                  text={"Rest"}
                  secondary
                  onClick={handleRestCampSupplies}
                ></Button>
                <Button
                  text={"Decay"}
                  negative
                  onClick={handleDecayCampSupplies}
                ></Button>
              </div>
            </InputLabel>
          </div>
        </div>
      ) : (
        <div>You are not in a party</div>
      )}
    </Page>
  );
};
