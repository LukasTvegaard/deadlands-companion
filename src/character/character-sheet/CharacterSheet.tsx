import { CharacterContext } from "../../DeadlandsCompanion";
import CharacterMenu from "../CharacterMenu";
import { useContext } from "react";
import Page from "../../shared/page/Page";
import { Attribute, Skill, Unskilled, getSkillName } from "../../utils/enums";
import { Resources } from "./resources/Resources";
import { ListTile } from "../../shared/tiles/ListTile";
import { SingleDiceRow } from "../../shared/rows/SingleDiceRow";
import { styled } from "styled-components";
import { getRoll } from "../character-logic/roll-logic/RollLogic";

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export const CharacterSheet = () => {
  const character = useContext(CharacterContext);

  if (!character) return null;

  const unskilledRoll = getRoll(Unskilled, character);

  return (
    <Page pageName="Character Sheet" prevLocation={CharacterMenu.Location}>
      <Resources />
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
      {/*<div>Edges</div>
      character.edges
        ? Object.keys(character.edges).map((edgeKey) => {
            const edgeDetail = Edges[edgeKey as Edge];
            return (
              <div key={edgeKey}>
                {edgeDetail?.name}: {edgeDetail?.description_short}
              </div>
            );
          })
        : null*/}
    </Page>
  );
};

CharacterSheet.Location = {
  path: `/character/sheet`,
  name: "Sheet",
};

export default CharacterSheet;
