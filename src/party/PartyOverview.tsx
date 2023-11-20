import { equalTo, orderByChild, query, ref } from "firebase/database";
import { useContext } from "react";
import { useList, useObjectVal } from "react-firebase-hooks/database";

import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { CharacterContext } from "../DeadlandsCompanion";
import { Button } from "../shared/buttons/Button";
import Page from "../shared/page/Page";
import { Spinner } from "../shared/spinner/Spinner";
import { StyledLink } from "../shared/StyledLink";
import { database } from "../utils/firebase/Firebase";
import { Character } from "../utils/types/Character";
import { Party } from "../utils/types/Party";
import { ListTitle } from "../shared/text/ListTitle";
import { IconButton } from "../shared/buttons/IconButton";
import { Icons } from "../icons/Icons";
import styled from "styled-components";
import { snapshotsToValues } from "../utils/firebase/SnapshotFormatter";
import { PartyMemberTile } from "./PartyMemberTile";

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0 24px;
`;

const PartyEmptyState = ({ character }: { character: Character }) => {
  if (character.isDM) {
    return (
      <>
        <div>Assemble your campaign party and start your adventure!</div>
        <StyledLink to={"create"}>
          <Button text="Create party"></Button>
        </StyledLink>
      </>
    );
  } else {
    return (
      <div>
        {getCharacterFullName(character)} has not been invited to any parties
        yet. Ask your DM for an invite!
      </div>
    );
  }
};

export const PartyOverview = () => {
  const character = useContext(CharacterContext);
  const partyId = character.partyId || null;
  const partyRef = ref(database(), `parties/${partyId}`);
  const [party, loading] = useObjectVal<Party>(partyRef);
  const partyCharactersQuery = query(
    ref(database(), "characters"),
    orderByChild("partyId"),
    equalTo(partyId)
  );
  const [partyCharactersSnapshots, partyCharactersLoading] =
    useList(partyCharactersQuery);

  const partyCharacters = snapshotsToValues<Character>(
    partyCharactersSnapshots
  )?.filter((character) => !character.isDM);

  return (
    <Page pageName={"Party"}>
      {loading || partyCharactersLoading ? (
        <Spinner />
      ) : !party ? (
        <PartyEmptyState character={character} />
      ) : (
        <div>
          <ListTitle>
            {party.name}
            {character.isDM ? (
              <StyledLink to={"edit"}>
                <IconButton secondary icon={Icons.Pen} />
              </StyledLink>
            ) : null}
          </ListTitle>
          <GroupContainer>
            {partyCharacters?.map((partyChar) => (
              <PartyMemberTile
                key={partyChar.id}
                character={partyChar}
                isDM={character.isDM}
              />
            ))}
          </GroupContainer>
        </div>
      )}
    </Page>
  );
};

export default PartyOverview;
