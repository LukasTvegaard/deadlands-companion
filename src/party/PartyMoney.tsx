import styled from "styled-components";
import { ClickableSurface } from "../shared/ClickableSurface";
import { Theme } from "../Theme";
import { Icon } from "../icons/Icon";
import { Icons } from "../icons/Icons";
import { StyledLink } from "../shared/StyledLink";
import { CenterRow } from "../shared/rows/CenterRow";

const PartyMoneyWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

type PartyMoneyProps = {
  partyMoney?: number;
};
export const PartyMoney = ({ partyMoney = 0 }: PartyMoneyProps) => {
  return (
    <StyledLink to={`party-money/edit`}>
      <PartyMoneyWrapper>
        <CenterRow>
          <div>Party money:</div>
          <div>{`$${partyMoney}`}</div>
        </CenterRow>
        <Icon
          icon={Icons.ChevronRight}
          height={24}
          width={24}
          color={Theme.Surface[400]}
        />
      </PartyMoneyWrapper>
    </StyledLink>
  );
};
