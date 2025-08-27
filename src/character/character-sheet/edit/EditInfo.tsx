import { useContext, useState } from "react";
import { CharacterContext } from "../../../CharacterContext";
import Page from "../../../shared/page/Page";
import { styled } from "styled-components";
import { Button } from "../../../shared/buttons/Button";
import { Locations } from "../../../utils/Location";
import { database } from "../../../utils/firebase/Firebase";
import { ref, update } from "firebase/database";
import { Rank } from "../../../utils/enums";

const EditInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CharacterInput = styled.input`
  font-size: 16px;
  padding: 8px 4px;
  border-radius: 4px;
`;

const RankSelect = styled.select`
  font-size: 16px;
  padding: 8px 4px;
  border-radius: 4px;
`;

type UpdateCharacterInput = {
  characterKey: string;
  characterInfo: {
    firstName: string;
    lastName: string;
    rank: Rank;
  };
};
const updateCharacter = ({
  characterKey,
  characterInfo,
}: UpdateCharacterInput) => {
  const db = database();
  update(ref(db, `characters/${characterKey}`), characterInfo);
};

export const EditInfo = () => {
  const character = useContext(CharacterContext);
  const { id, firstName, lastName, rank } = character;

  const [_firstName, setFirstName] = useState(firstName);
  const [_lastName, setLastName] = useState(lastName);
  const [_rank, setRank] = useState(rank);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleRankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRank(e.target.value as Rank);
  };

  const handleCharacterUpdate = () => {
    updateCharacter({
      characterKey: id,
      characterInfo: {
        firstName: _firstName,
        lastName: _lastName,
        rank: _rank,
      },
    });
  };

  const showSaveButton =
    _firstName !== firstName || _lastName !== lastName || _rank !== rank;

  return (
    <Page
      pageName={"Edit Character Info"}
      prevLocation={Locations.CharacterMenu}
    >
      <EditInfoStyle>
        <InputLabel>
          <label htmlFor="firstName">First name</label>
          <CharacterInput
            id="firstName"
            name="firstName"
            autoFocus
            value={_firstName}
            onChange={handleFirstNameChange}
          />
        </InputLabel>

        <InputLabel>
          <label htmlFor="lastName">Last name</label>
          <CharacterInput
            id="lastName"
            name="lastName"
            value={_lastName}
            onChange={handleLastNameChange}
          />
        </InputLabel>

        <InputLabel>
          <label htmlFor="rank">Rank</label>
          <RankSelect
            id="rank"
            name="rank"
            value={_rank}
            onChange={handleRankChange}
          >
            <option value={Rank.Novice}>Novice</option>
            <option value={Rank.Seasoned}>Seasoned</option>
            <option value={Rank.Veteran}>Veteran</option>
            <option value={Rank.Heroic}>Heroic</option>
            <option value={Rank.Legendary}>Legendary</option>
          </RankSelect>
        </InputLabel>
        {showSaveButton ? (
          <Button
            text="Save changes"
            onClick={() => handleCharacterUpdate()}
          ></Button>
        ) : null}
      </EditInfoStyle>
    </Page>
  );
};
