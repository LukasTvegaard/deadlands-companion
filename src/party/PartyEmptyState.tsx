import { getCharacterFullName } from "../character/character-logic/InfoLogic";
import { Button } from "../shared/buttons/Button";
import { StyledLink } from "../shared/StyledLink";
import { Character } from "../utils/types/Character";

export const PartyEmptyState = ({ character }: { character: Character }) => {
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
