import { useContext, useState } from "react";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { ListTile } from "../../shared/tiles/ListTile";
import { characterHasEdge } from "../../static/edges/EdgeUtil";
import { Edge } from "../../utils/enums";
import { Locations } from "../../utils/Location";
import { equalTo, orderByChild, query, ref } from "firebase/database";
import { database } from "../../utils/firebase/Firebase";
import { useList } from "react-firebase-hooks/database";
import { snapshotsToValues } from "../../utils/firebase/DataFormatting";
import { Character } from "../../utils/types/Character";
import { Button } from "../../shared/buttons/Button";
import { PotionRow } from "./PotionRow";
import { CreatePotionModal } from "./CreatePotionModal";
import { Spinner } from "../../shared/spinner/Spinner";

export const Potions = () => {
  const [createPotionModalOpen, setCreatePotionModalOpen] = useState(false);

  const character = useContext(CharacterContext);
  const potions = character.potions
    ? Object.entries(character.potions).map(([id, potionData]) => ({
        ...potionData,
        id,
      }))
    : [];
  const isAlchemist = characterHasEdge(Edge.Alchemy, character);

  const partyId = character.partyId || null;
  const partyCharactersQuery = query(
    ref(database(), "characters"),
    orderByChild("partyId"),
    equalTo(partyId)
  );
  const [partyCharactersSnapshots, partyCharactersLoading] =
    useList(partyCharactersQuery);

  const partyCharacters =
    snapshotsToValues<Character>(partyCharactersSnapshots)?.filter(
      (character) => !character.isDM
    ) ?? [];

  return (
    <Page pageName="Potions" prevLocation={Locations.CharacterMenu}>
      {partyCharactersLoading ? (
        <Spinner />
      ) : (
        <>
          {createPotionModalOpen ? (
            <CreatePotionModal
              partyCharacters={partyCharacters}
              onClose={() => setCreatePotionModalOpen(false)}
            />
          ) : null}
          <ListTile title={"Potions"} dark>
            {potions.length > 0 ? (
              potions.map((potion) => (
                <PotionRow
                  key={potion.id}
                  potion={potion}
                  partyCharacters={partyCharacters}
                />
              ))
            ) : (
              <div>You don't have any potions...</div>
            )}
          </ListTile>
          {isAlchemist ? (
            <Button
              text={"Create Potion"}
              onClick={() => setCreatePotionModalOpen(true)}
            />
          ) : null}
        </>
      )}
    </Page>
  );
};
