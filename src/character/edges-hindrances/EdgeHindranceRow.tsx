import { styled } from "styled-components";
import { Theme } from "../../Theme";

const EdgeHindranceRowStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px;
  border-bottom: 1px solid ${Theme.Surface[300]};
  &:last-child {
    border-bottom: none;
  }
`;

type TitleProps = {
  isEdge?: boolean;
};
const Title = styled.div<TitleProps>`
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => (props.isEdge ? Theme.Primary[600] : Theme.Error[300])};
`;

const Description = styled.div`
  font-size: 16px;
`;

type EdgeHindranceRowProps = {
  title: string;
  description: string;
  isEdge?: boolean;
};

export const EdgeHindranceRow = ({
  title,
  description,
  isEdge,
}: EdgeHindranceRowProps) => {
  return (
    <EdgeHindranceRowStyle>
      <Title isEdge={isEdge}>{title}</Title>
      <Description>{description}</Description>
    </EdgeHindranceRowStyle>
  );
};
