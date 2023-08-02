import { styled } from "styled-components";
import { StyledLink } from "../StyledLink";
import { Theme } from "../../Theme";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";
import { ClickableSurface } from "../ClickableSurface";

const IndexLinkStyle = styled(StyledLink)`
  ${ClickableSurface}
  display: flex;
  align-items: center;
  padding: 16px 4px;
  border-bottom: 1px solid ${Theme.Surface[300]};
`;

const IndexLinkContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
`;

type IndexLinkProps = {
  to: string;
  label: string;
  onLink?: React.MouseEventHandler<HTMLAnchorElement>;
};
export const IndexLink = ({ to, label, onLink }: IndexLinkProps) => {
  return (
    <IndexLinkStyle to={to} onClick={onLink}>
      <IndexLinkContent>
        {label}
        <Icon
          icon={Icons.ChevronRight}
          height={24}
          width={24}
          color={Theme.Surface[400]}
        />
      </IndexLinkContent>
    </IndexLinkStyle>
  );
};
