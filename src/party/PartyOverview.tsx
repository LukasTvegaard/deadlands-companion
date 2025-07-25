import { equalTo, orderByChild, query, ref } from "firebase/database";
import { useContext } from "react";
import { useList, useObjectVal } from "react-firebase-hooks/database";

import { CharacterContext } from "../DeadlandsCompanion";
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
import { snapshotsToValues } from "../utils/firebase/DataFormatting";
import { PartyMemberTile } from "./PartyMemberTile";
import { CampSupplies } from "./CampSupplies";
import { PartyMoney } from "./PartyMoney";
import { PartyEmptyState } from "./PartyEmptyState";

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0 24px;
`;

export const PartyOverview = () => {
  const character = useContext(CharacterContext);
  const isDM = character.isDM;
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
    <Page pageName={party?.name ?? "Party"}>
      {loading || partyCharactersLoading ? (
        <Spinner />
      ) : !party ? (
        <PartyEmptyState character={character} />
      ) : (
        <div>
          {isDM ? (
            <ListTitle>
              {party.name}
              <StyledLink to={"edit"}>
                <IconButton secondary icon={Icons.Pen} />
              </StyledLink>
            </ListTitle>
          ) : null}
          <PartyMoney partyMoney={party.currency} />
          <CampSupplies
            partyMemberCount={partyCharacters?.length}
            campSupplies={party.campSupplies}
            hasCarriage={party.hasCarriage}
          />
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
