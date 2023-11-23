import styled from "styled-components";
import { ClickableSurface } from "../shared/ClickableSurface";
import { Theme } from "../Theme";
import { Icon } from "../icons/Icon";
import { Icons } from "../icons/Icons";
import { StyledLink } from "../shared/StyledLink";

export const CampSupplyCostPerPerson = 10;
export const CampSupplyCapacityPerPerson = 40;

export function getCampSupplyCapacity(
  partyMemberCount: number,
  hasCarriage: boolean
) {
  return (
    partyMemberCount * CampSupplyCapacityPerPerson + (hasCarriage ? 300 : 0)
  );
}

const CampSuppliesWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
`;

const CampSuppliesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 8px;
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
        <CampSuppliesStyle>
          <div>Camp Supplies:</div>
          <div>{`${campSupplies} / ${campSupplyCapacity}`}</div>
        </CampSuppliesStyle>
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
