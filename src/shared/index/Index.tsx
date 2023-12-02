import { styled } from "styled-components";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

type IndexProps = {
  children: React.ReactNode;
};
export const Index = ({ children }: IndexProps) => {
  return <Navigation>{children}</Navigation>;
};
