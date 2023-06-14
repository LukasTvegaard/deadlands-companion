import { styled } from "styled-components";
import { StyledLink } from "./StyledLink";
import { Theme } from "../Theme";

const BackButton = styled(StyledLink)`
  padding: 20px 0;
  color: ${Theme.Primary[100]};
`;

const PageHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type PageHeaderProps = {
  pageName: string;
  prevLocation: {
    path: string;
    name: string;
  };
};
export const PageHeader = ({ pageName, prevLocation }: PageHeaderProps) => {
  return (
    <PageHeaderStyle>
      <BackButton to={prevLocation.path}>{`< ${prevLocation.name}`}</BackButton>
      <div>{pageName}</div>
      <div>bullet</div>
    </PageHeaderStyle>
  );
};
