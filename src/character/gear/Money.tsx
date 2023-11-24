import styled from "styled-components";
import { ClickableSurface } from "../../shared/ClickableSurface";
import { Theme } from "../../Theme";
import { useContext } from "react";
import { CharacterContext } from "../../DeadlandsCompanion";
import { StyledLink } from "../../shared/StyledLink";
import { Icon } from "../../icons/Icon";
import { Icons } from "../../icons/Icons";

const MoneyWrapper = styled.div`
  ${ClickableSurface};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.Surface[300]};
  padding: 8px 4px;
  margin-bottom: 8px;
`;

const MoneyStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 8px;
`;

export const Money = () => {
  const character = useContext(CharacterContext);

  return (
    <StyledLink to={`money`}>
      <MoneyWrapper>
        <MoneyStyle>
          <div>Money:</div>
          <div>{`$${character.currency}`}</div>
        </MoneyStyle>
        <Icon
          icon={Icons.ChevronRight}
          height={24}
          width={24}
          color={Theme.Surface[400]}
        />
      </MoneyWrapper>
    </StyledLink>
  );
};
