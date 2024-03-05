import { styled } from "styled-components";
import { CharacterInfo } from "./CharacterInfo";
import { Resources } from "./resources/Resources";

const InfoAndResourcesStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InfoAndResources = () => {
  return (
    <InfoAndResourcesStyle>
      <Resources />
      <CharacterInfo />
    </InfoAndResourcesStyle>
  );
};
