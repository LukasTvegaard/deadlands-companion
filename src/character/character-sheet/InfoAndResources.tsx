import { styled } from "styled-components";
import { Locationable } from "../../utils/Location";
import { CharacterInfo } from "./CharacterInfo";
import { Resources } from "./resources/Resources";

const InfoAndResourcesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

interface InfoAndResourcesProps extends Locationable {}
export const InfoAndResources = ({ locationKey }: InfoAndResourcesProps) => {
  return (
    <InfoAndResourcesStyle>
      <CharacterInfo locationKey={locationKey} />
      <Resources locationKey={locationKey} />
    </InfoAndResourcesStyle>
  );
};
