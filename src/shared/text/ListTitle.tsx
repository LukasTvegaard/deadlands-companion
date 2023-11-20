import styled from "styled-components";
import { Theme } from "../../Theme";

const ListTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 12px;
  color: ${Theme.Primary[600]};
  border-bottom: 1px solid ${Theme.Surface[300]};
`;

type ListTitleProps = {
  children: React.ReactNode;
};
export const ListTitle = ({ children }: ListTitleProps) => {
  return <ListTitleStyle>{children}</ListTitleStyle>;
};
