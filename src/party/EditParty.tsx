import { ref, query, orderByChild, equalTo } from "firebase/database";
import { partition } from "lodash";
import { useContext } from "react";
import { useList } from "react-firebase-hooks/database";

import { CharacterContext } from "../DeadlandsCompanion";
import Page from "../shared/page/Page";
import { Spinner } from "../shared/spinner/Spinner";
import { database } from "../utils/firebase/Firebase";
import { Character } from "../utils/types/Character";
import { ButtonRow } from "../shared/rows/ButtonRow";
import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { ListTitle } from "../shared/text/ListTitle";
import { set } from "../utils/firebase/DataAccess";
import { snapshotsToValues } from "../utils/firebase/DataFormatting";

const setPartyId = (characterId: string, partyId: string | null) => {
  const partyIdRef = ref(database(), `characters/${characterId}/partyId`);
  set(partyIdRef, partyId);
};

type PartyMemberRowBase = {
  character: Character;
};
interface PartyMemberRowProps extends PartyMemberRowBase {}
const PartyMemberRow = ({ character }: PartyMemberRowProps) => {
  const characterName = getCharacterFullName(character);

  const removePartyMember = () => {
    if (
      window.confirm(
        `Are you sure you want to remove "${characterName}" from the party?`
      )
    ) {
      setPartyId(character.id, null);
    }
  };

  return (
    <ButtonRow label={characterName} isRemove onClick={removePartyMember} />
  );
};

interface NonPartyMemberRowProps extends PartyMemberRowBase {
  partyId: string;
}
const NonPartyMemberRow = ({ character, partyId }: NonPartyMemberRowProps) => {
  const characterName = getCharacterFullName(character);

  return (
    <ButtonRow
      label={characterName}
      onClick={() => setPartyId(character.id, partyId)}
    />
  );
};

export const EditParty = () => {
  const character = useContext(CharacterContext);
  const partyId = character.partyId;

  const charactersRef = query(
    ref(database(), "characters"),
    orderByChild("isDM"),
    equalTo(false)
  );
  const [charactersSnapshots, loading] = useList(charactersRef);
  const characters = snapshotsToValues<Character>(charactersSnapshots);

  const [partyCharacters, nonPartyCharacters] = partition(
    characters,
    (char) => {
      return char.partyId === partyId;
    }
  );

  if (!character.isDM || !partyId) {
    return <div>You do not own a party</div>;
  }

  return (
    <Page
      pageName={"Edit Party"}
      prevLocation={{ path: "/party", name: "Cancel" }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <ListTitle>In party</ListTitle>
          {partyCharacters?.map((character) => {
            return (
              <PartyMemberRow
                key={character.id}
                character={character}
              ></PartyMemberRow>
            );
          })}
          <ListTitle>Not in party</ListTitle>
          {nonPartyCharacters?.map((character) => {
            return (
              <NonPartyMemberRow
                key={character.id}
                partyId={partyId}
                character={character}
              ></NonPartyMemberRow>
            );
          })}
        </div>
      )}
    </Page>
  );
};
