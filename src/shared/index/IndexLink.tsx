import { styled } from "styled-components";
import { StyledLink } from "../StyledLink";

const NavLink = styled(StyledLink)`
  height: 48px;
  display: flex;
  font-family: "Rye";
`;

type IndexLinkProps = {
  to: string;
  label: string;
  onLink?: React.MouseEventHandler<HTMLAnchorElement>;
};
export const IndexLink = ({ to, label, onLink }: IndexLinkProps) => {
  return (
    <NavLink to={to} onClick={onLink}>
      {label}
    </NavLink>
  );
};
