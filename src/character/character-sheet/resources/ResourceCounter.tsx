import { css, styled } from "styled-components";
import { Theme } from "../../../Theme";

const ResourceCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ResourceBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  border: 1px solid ${(props) => props.color};
  border-radius: 8px;
`;

type ResourceGridProps = {
  $clickable: boolean;
};
const ResourceGrid = styled.div<ResourceGridProps>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => (props.$clickable ? "60px" : "0px")}, 1fr)
  );
`;

type ResourceSegmentProps = {
  $clickable?: boolean;
  $empty?: boolean;
};
const ResourceSegment = styled.div<ResourceSegmentProps>`
  display: flex;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  text-align: right;
  padding-right: 4px;
  height: 30px;
  margin-bottom: 4px;

  justify-content: flex-end;
  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;
      border-right: 1px solid #e1e1e1;
    `}

  ${(props) =>
    props.$empty &&
    css`
      background-color: transparent;
      border-right: 1px solid ${props.color};
    `}
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right-color: ${(props) => props.color};
  }
`;

type ResourceTextProps = {
  $lightText?: boolean;
};
const ResourceText = styled.div<ResourceTextProps>`
  text-align: center;
  align-self: center;
  font-style: italic;
  white-space: nowrap;
  ${(props) =>
    props.$lightText &&
    css`
      color: ${Theme.Primary[400]};
      font-size: 11px;
    `}
`;

type ResourceCounterProps = {
  total: number;
  remaining: number;
  color: string;
  noRemainingText?: string;
  onResourceSegmentClick?: (val: number) => void;
};
export const ResourceCounter = ({
  total,
  remaining,
  noRemainingText,
  color,
  onResourceSegmentClick,
}: ResourceCounterProps) => {
  const clickable = !!onResourceSegmentClick;

  const handleResourceSegmentClick = (val: number): void => {
    if (clickable) {
      onResourceSegmentClick(val);
    }
  };

  const totalResourcesList = [...Array(total).keys()].map((val) => val + 1);

  return (
    <ResourceCounterWrapper>
      {noRemainingText && remaining === 0 ? (
        <ResourceBorder color={color}>
          <ResourceText>{noRemainingText}</ResourceText>
        </ResourceBorder>
      ) : (
        <ResourceGrid $clickable={clickable}>
          {totalResourcesList.map((val) => {
            const showTotalValue = val === remaining;
            const showFivePartValue = clickable && val % 5 === 0;
            const isEmpty = val > remaining;
            return (
              <ResourceSegment
                key={val}
                color={color}
                $clickable={clickable}
                $empty={isEmpty}
                onClick={() => handleResourceSegmentClick(val)}
              >
                {showTotalValue ? (
                  <ResourceText>
                    {val} / {total}
                  </ResourceText>
                ) : showFivePartValue ? (
                  <ResourceText $lightText>{val}</ResourceText>
                ) : null}
              </ResourceSegment>
            );
          })}
        </ResourceGrid>
      )}
    </ResourceCounterWrapper>
  );
};
