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
import { snapshotsToValues } from "../utils/firebase/DataFormatting";
import { Character } from "../utils/types/Character";
import { Party } from "../utils/types/Party";
import {
  CampSupplyCostPerPerson,
  getCampSupplyCapacity,
} from "./CampSupplyLogic";
import { Button } from "../shared/buttons/Button";
import { Checkbox } from "../shared/buttons/Checkbox";
import { CenterRow } from "../shared/rows/CenterRow";

const AddInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
  width: 175px;
  border-radius: 4px;
  border-width: 1px;
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
  currentCampSupplies = 0,
  addedCampSupplies: number | string = 0
) {
  return currentCampSupplies + Number(addedCampSupplies);
}

function getRestCost(partyMemberCount = 1) {
  return CampSupplyCostPerPerson * partyMemberCount;
}

function restWithCampSupplies(currentCampSupplies = 0, partyMemberCount = 1) {
  const newCampSupplies = currentCampSupplies - getRestCost(partyMemberCount);
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

  const handleAddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <CenterRow>
            <div>Current Camp Supplies:</div>
            <div>{`${campSupplies} / ${campSupplyCapacity}`}</div>
          </CenterRow>
          {character.isDM ? (
            <Checkbox
              childrenLeft
              isSelected={party.hasCarriage}
              onChange={(isSelected) => setHasCarriage(isSelected, partyId)}
            >
              Party has carriage
            </Checkbox>
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "16px",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AddInput
                type="number"
                id="addCampSupplies"
                name="addCampSupplies"
                autoComplete="off"
                placeholder="Enter changed value"
                value={addCampSuppliesValue ?? ""}
                onChange={handleAddInputChange}
              />
              <Button
                text={"Add camp supplies"}
                onClick={handleAddCampSupplies}
              ></Button>
            </div>

            <Button
              text={`Rest (-${getRestCost(partyMemberCount)} supplies)`}
              secondary
              onClick={handleRestCampSupplies}
            ></Button>
            <Button
              text={`Decay (-${
                campSupplies - decayCampSupplies(campSupplies)
              } supplies)`}
              negative
              onClick={handleDecayCampSupplies}
            ></Button>
          </div>
        </div>
      ) : (
        <div>You are not in a party</div>
      )}
    </Page>
  );
};
