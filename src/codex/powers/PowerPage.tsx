import { styled } from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { Tile } from "../shared/Tile";
import { PowerList } from "../../static/powers/PowerLIst";

const PowerGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 12px;
`;

export const PowerPage = () => {
  return (
    <Page pageName="Powers" prevLocation={Locations.CodexMenu}>
      <PowerGroupsWrapper>
        {PowerList.map((power) => {
          return (
            <Tile
              key={power.key}
              link={power.key}
              name={power.name}
              description={""}
            />
          );
        })}
      </PowerGroupsWrapper>
    </Page>
  );
};
