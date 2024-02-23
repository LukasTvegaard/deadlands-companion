import { styled } from "styled-components";
import Page from "../../shared/page/Page";
import { Locations } from "../../utils/Location";
import { HindranceList } from "../../static/hindrances/HindranceList";
import { Tile } from "../shared/Tile";
import { Search } from "../../shared/Search";
import { useState } from "react";
import { HindranceDetailType } from "../../utils/interfaces/HindranceDetail";
import { Header } from "../shared/Header";

const HindranceGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const hindranceFilter = (
  hindrance: HindranceDetailType,
  searchString: string
) => {
  const hindranceText =
    hindrance.name.toLowerCase() + hindrance.description_short.toLowerCase();
  return hindranceText.includes(searchString.toLowerCase());
};

export const HindrancePage = () => {
  const [searchString, setSearchString] = useState<string>("");
  const hindrances =
    searchString.length > 0
      ? HindranceList.filter((hindrance) =>
          hindranceFilter(hindrance, searchString)
        )
      : HindranceList;

  return (
    <Page pageName="Hindrances" prevLocation={Locations.CodexMenu}>
      <Header>
        <Search
          callback={(text) => setSearchString(text)}
          placeholder={"Search for a Hindrance..."}
        ></Search>
      </Header>
      <HindranceGroupsWrapper>
        {hindrances.map((hindrance) => {
          return (
            <Tile
              key={hindrance.key}
              link={hindrance.key}
              name={hindrance.name}
              description={hindrance.description_short}
              isNegative
            />
          );
        })}
      </HindranceGroupsWrapper>
    </Page>
  );
};
