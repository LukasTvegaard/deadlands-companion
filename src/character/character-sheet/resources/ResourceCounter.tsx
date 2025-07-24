import { css, styled } from "styled-components";
import { Theme } from "../../../Theme";

const ResourceCounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-grow: 1;
`;

const ResourceBorder = styled.div`
  position: relative;
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
  align-items: center;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => (props.$clickable ? "60px" : "0px")}, 1fr)
  );
`;

type ResourceSegmentProps = {
  $clickable?: boolean;
  $empty?: boolean;
  $stagedForUse?: boolean;
  $locked?: boolean;
};
const ResourceSegment = styled.div<ResourceSegmentProps>`
  position: relative;
  display: flex;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  height: 30px;
  margin: 2px 0;

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
  ${(props) =>
    props.$locked &&
    css`
      background-color: #43a047;
      border-color: #43a047;
    `}
  ${(props) =>
    props.$stagedForUse &&
    css`
      filter: brightness(1.6);
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
  $leftAlign?: boolean;
  $rightAlign?: boolean;
};
const ResourceText = styled.div<ResourceTextProps>`
  position: absolute;
  z-index: 1;
  text-align: center;
  align-self: center;
  font-style: italic;
  white-space: nowrap;
  ${(props) =>
    props.$leftAlign
      ? css`
          left: 4px;
        `
      : props.$rightAlign
      ? css`
          right: 4px;
        `
      : ""}
  ${(props) =>
    props.$lightText &&
    css`
      color: ${Theme.Primary[400]};
      font-size: 11px;
    `}
`;

type ResourceCounterProps = {
  total: number;
  locked?: number;
  stagedForUse?: number;
  remaining: number;
  color: string;
  noRemainingText?: string;
  onResourceSegmentClick?: (val: number) => void;
};
export const ResourceCounter = ({
  total,
  locked = 0,
  stagedForUse,
  remaining,
  noRemainingText,
  color,
  onResourceSegmentClick,
}: ResourceCounterProps) => {
  const max = total - locked;
  const clickable = !!onResourceSegmentClick;

  const handleResourceSegmentClick = (val: number): void => {
    if (clickable) {
      onResourceSegmentClick(val);
    }
  };

  const maxResourcesList = [...Array(max).keys()].map((val) => val + 1);
  const lockedResourcesList = [...Array(locked).keys()].map((val) => val + 1);

  const remainingResourcesList = [...Array(remaining).keys()].map(
    (val) => val + 1
  );
  const stagedForUseResourcesList = !stagedForUse
    ? []
    : remainingResourcesList.slice(-stagedForUse);

  return (
    <ResourceCounterWrapper>
      {noRemainingText && remaining === 0 ? (
        <ResourceBorder color={color}>
          <ResourceText>{noRemainingText}</ResourceText>
        </ResourceBorder>
      ) : (
        <ResourceGrid $clickable={clickable}>
          {maxResourcesList.map((val) => {
            const showTotalValue = val === remaining;
            const showFivePartValue = clickable && val % 5 === 0;
            const isEmpty = val > remaining;
            const isStagedForUse = stagedForUseResourcesList.includes(val);
            const leftAlign =
              !clickable &&
              total > 0 &&
              (val === 1 || val === 2 || val / total < 0.12);
            return (
              <ResourceSegment
                key={val}
                color={color}
                $clickable={clickable}
                $empty={isEmpty}
                $stagedForUse={isStagedForUse}
                onClick={() => handleResourceSegmentClick(val)}
              >
                {showTotalValue ? (
                  <ResourceText $leftAlign={leftAlign} $rightAlign={!leftAlign}>
                    {remaining} / {total}
                  </ResourceText>
                ) : showFivePartValue ? (
                  <ResourceText $rightAlign $lightText>
                    {val}
                  </ResourceText>
                ) : null}
              </ResourceSegment>
            );
          })}
          {lockedResourcesList.map((val) => (
            <ResourceSegment
              key={"locked-" + val}
              color={color}
              $locked={true}
            ></ResourceSegment>
          ))}
        </ResourceGrid>
      )}
    </ResourceCounterWrapper>
  );
};
