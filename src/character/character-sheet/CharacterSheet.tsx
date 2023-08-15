import { useContext } from "react";
import { styled } from "styled-components";

import { CharacterContext } from "../../DeadlandsCompanion";
import Page from "../../shared/page/Page";
import { SingleDiceRow, SingleValueRow } from "../../shared/rows/SingleDiceRow";
import { ListTile } from "../../shared/tiles/ListTile";
import { Attribute, getSkillName, Skill, Unskilled } from "../../utils/enums";
import { LocationKey, Locations } from "../../utils/Location";
import { getRoll } from "../character-logic/roll-logic/RollLogic";
import { InfoAndResources } from "./InfoAndResources";
import {
  getCharisma,
  getGrit,
  getPace,
  getParry,
  getRunningDie,
  getToughness,
} from "../character-logic/DerivedStatLogic";

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

const DerivedStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 0 24px;
`;

export const CharacterSheet = () => {
  const character = useContext(CharacterContext);

  const unskilledRoll = getRoll(Unskilled, character);

  return (
    <Page pageName="Character Sheet" prevLocation={Locations.CharacterMenu}>
      <InfoAndResources locationKey={LocationKey.CharacterSheet} />
      <ListTile title={"Derived Stats"}>
        <DerivedStatsContainer>
          <SingleValueRow
            label={"Toughness"}
            value={getToughness(character)}
          ></SingleValueRow>
          <SingleValueRow
            label={"Parry"}
            value={getParry(character)}
          ></SingleValueRow>
          <SingleValueRow
            label={"Charisma"}
            value={getCharisma(character)}
          ></SingleValueRow>
          <SingleValueRow
            label={"Grit"}
            value={getGrit(character)}
          ></SingleValueRow>
          <SingleValueRow
            label={"Pace"}
            value={getPace(character)}
          ></SingleValueRow>
          <SingleDiceRow
            label={"Running die"}
            dieType={getRunningDie(character)}
          ></SingleDiceRow>
        </DerivedStatsContainer>
      </ListTile>
      <br />
      <GroupContainer>
        <ListTile title="Attributes" editLink="edit/attribute">
          {character.attributes
            ? Object.keys(character.attributes).map((key) => {
                const attributeRoll = getRoll(key as Attribute, character);
                return (
                  <SingleDiceRow
                    key={key}
                    label={key}
                    dieType={attributeRoll.dice}
                    modifier={attributeRoll.modifier}
                  />
                );
              })
            : null}
        </ListTile>
        <ListTile title="Skills" editLink="edit/skill">
          {character.skills
            ? Object.keys(character.skills).map((key) => {
                const skillRoll = getRoll(key as Skill, character);
                return (
                  <SingleDiceRow
                    key={key}
                    label={getSkillName(key as Skill)}
                    dieType={skillRoll.dice}
                    modifier={skillRoll.modifier}
                  />
                );
              })
            : null}
          <SingleDiceRow
            key={Unskilled}
            label={Unskilled}
            dieType={unskilledRoll.dice}
            modifier={unskilledRoll.modifier}
          />
        </ListTile>
      </GroupContainer>
      <br />
    </Page>
  );
};

export default CharacterSheet;
