import { useContext } from "react";

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
import { Power } from "../../utils/enums/Power";
import { Potion } from "../../utils/types/Potion";

const mockPotions: Potion[] = [
  {
    id: "potion1",
    power: Power.Smite,
    isRaise: true,
    createdBy: "-NaOe2uwRuZAw9LZ1xdi",
    possessedBy: "-NaOe2uwRuZAw9LZ1xdi",
    powerPointCost: 5,
  },
  {
    id: "potion2",
    power: Power.Healing,
    isRaise: false,
    createdBy: "-NaOe2uwRuZAw9LZ1xdi",
    possessedBy: "-NjiDk_0VVFVEADPVps3",
    powerPointCost: 3,
  },
];

export const Potions = () => {
  const character = useContext(CharacterContext);
  const potions = character.potions
    ? Object.entries(character.potions).map(([id, potionData]) => ({
        ...potionData,
        id,
      }))
    : mockPotions;
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

  console.log(partyCharacters, partyCharactersLoading);

  return (
    <Page pageName="Potions" prevLocation={Locations.CharacterMenu}>
      <ListTile title={"Potions"} dark>
        {potions.map((potion) => (
          <PotionRow
            key={potion.id}
            potion={potion}
            partyCharacters={partyCharacters}
          />
        ))}
      </ListTile>
      {isAlchemist ? <Button text={"Create Potion"} /> : null}
    </Page>
  );
};
