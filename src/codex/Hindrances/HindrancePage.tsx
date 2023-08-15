import { styled } from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { HindranceList } from "../../static/hindrances/HindranceList";
import { Tile } from "../shared/Tile";

const EdgeGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 12px;
`;

export const HindrancePage = () => {
  return (
    <Page pageName="Hindrances" prevLocation={Locations.CodexMenu}>
      <EdgeGroupsWrapper>
        {HindranceList.map((hindrance) => {
          return (
            <Tile
              key={hindrance.key}
              link={hindrance.key}
              name={hindrance.name}
              description={hindrance.description_short}
            />
          );
        })}
      </EdgeGroupsWrapper>
    </Page>
  );
};
