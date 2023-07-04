import { CharacterContext } from "../../DeadlandsCompanion";
import CharacterMenu from "../CharacterMenu";
import { useContext } from "react";
import { EdgeList } from "../../static/edges/EdgeList";
import Page from "../../shared/page/Page";
import { Skill, getSkillName } from "../../utils/enums";
import { Resources } from "./resources/Resources";
import { ListTile } from "../../shared/tiles/ListTile";
import { SingleDiceRow } from "../../shared/rows/SingleDiceRow";
import { styled } from "styled-components";

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export const CharacterSheet = () => {
  const character = useContext(CharacterContext);

  if (!character) return null;

  return (
    <Page pageName="Character Sheet" prevLocation={CharacterMenu.Location}>
      <Resources />
      <br />
      <GroupContainer>
        <ListTile title="Attributes" editLink="edit/attribute">
          {character.attributes
            ? Object.entries(character.attributes).map(([key, val]) => {
                return <SingleDiceRow key={key} label={key} dieType={val} />;
              })
            : null}
        </ListTile>
        <ListTile title="Skills" editLink="edit/skill">
          {character.skills
            ? Object.entries(character.skills).map(([key, val]) => {
                return (
                  <SingleDiceRow
                    key={key}
                    label={getSkillName(key as Skill)}
                    dieType={val}
                  />
                );
              })
            : null}
        </ListTile>
      </GroupContainer>
      <br />
      <div>Edges</div>
      {character.edges
        ? Object.keys(character.edges).map((edgeKey) => {
            const edgeDetail = EdgeList.find((e) => e.key === edgeKey);
            return (
              <div key={edgeKey}>
                {edgeDetail?.name}: {edgeDetail?.description_short}
              </div>
            );
          })
        : null}
    </Page>
  );
};

CharacterSheet.Location = {
  path: `/character/sheet`,
  name: "Sheet",
};

export default CharacterSheet;
