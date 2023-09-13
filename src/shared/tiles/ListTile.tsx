import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { StyledLink } from "../StyledLink";
import { IconButton } from "../buttons/IconButton";
import { Icons } from "../../icons/Icons";

type ListTileWrapperProps = {
  dark?: boolean;
};
const ListTileWrapper = styled.div<ListTileWrapperProps>`
  background-color: ${(props) =>
    props.dark ? Theme.Surface[200] : Theme.Surface[250]};
  border-radius: 4px;
`;

const ListTileHeader = styled.div<ListTileWrapperProps>`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  padding-left: 8px;
  border-bottom: ${(props) =>
    props.dark ? "none" : `1px solid ${Theme.Surface[400]}`};
`;

type ListTileProps = {
  title: string;
  dark?: boolean;
  editLink?: string;
  children: React.ReactNode;
};
export const ListTile = ({
  title,
  dark,
  editLink,
  children,
}: ListTileProps) => {
  return (
    <ListTileWrapper dark={dark}>
      <ListTileHeader dark={dark}>
        {title}
        {editLink ? (
          <StyledLink to={editLink}>
            <IconButton secondary icon={Icons.Pen} />
          </StyledLink>
        ) : null}
      </ListTileHeader>
      {children}
    </ListTileWrapper>
  );
};
