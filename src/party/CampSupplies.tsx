import styled from "styled-components";
import { ClickableSurface } from "../shared/ClickableSurface";
import { Theme } from "../Theme";
import { Icon } from "../icons/Icon";
import { Icons } from "../icons/Icons";
import { StyledLink } from "../shared/StyledLink";
import { getCampSupplyCapacity } from "./CampSupplyLogic";
import { CenterRow } from "../shared/rows/CenterRow";

const CampSuppliesWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

type CampSuppliesProps = {
  campSupplies?: number;
  partyMemberCount?: number;
  hasCarriage?: boolean;
};
export const CampSupplies = ({
  campSupplies = 0,
  partyMemberCount = 1,
  hasCarriage = false,
}: CampSuppliesProps) => {
  const campSupplyCapacity = getCampSupplyCapacity(
    partyMemberCount,
    hasCarriage
  );
  return (
    <StyledLink to={`camp-supplies/edit`}>
      <CampSuppliesWrapper>
        <CenterRow>
          <div>Camp Supplies:</div>
          <div>{`${campSupplies} / ${campSupplyCapacity}`}</div>
        </CenterRow>
        <Icon
          icon={Icons.ChevronRight}
          height={24}
          width={24}
          color={Theme.Surface[400]}
        />
      </CampSuppliesWrapper>
    </StyledLink>
  );
};
