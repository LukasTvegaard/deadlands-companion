import { styled } from "styled-components";
import { Theme } from "../../Theme";
import { StyledLink } from "../StyledLink";
import { IconButton } from "../buttons/IconButton";
import { Icons } from "../../icons/Icons";

const ListTileWrapper = styled.div`
  background-color: ${Theme.Surface[250]};
  border-radius: 4px;
`;

const ListTileHeader = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  padding-left: 8px;
  border-bottom: 1px solid ${Theme.Surface[400]};
`;

type ListTileProps = {
  title: string;
  editLink: string;
  children: React.ReactNode;
};
export const ListTile = ({ title, editLink, children }: ListTileProps) => {
  return (
    <ListTileWrapper>
      <ListTileHeader>
        {title}
        <StyledLink to={editLink}>
          <IconButton icon={Icons.Pen} />
        </StyledLink>
      </ListTileHeader>
      {children}
    </ListTileWrapper>
  );
};
