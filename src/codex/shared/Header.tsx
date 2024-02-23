import styled from "styled-components";
import { FlexRow } from "./FlexRow";
import { Theme } from "./../../Theme";

const HeaderStyle = styled(FlexRow)`
  position: sticky;
  top: 0;
  background-color: ${Theme.Surface["200"]};
  padding: 8px 0;
`;

type HeaderProps = {
  children: React.ReactNode;
  gap?: number;
};
export const Header = ({ children, gap }: HeaderProps) => {
  return <HeaderStyle $gap={gap}>{children}</HeaderStyle>;
};
