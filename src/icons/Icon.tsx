import styled, { css } from "styled-components";
import { Icons } from "./Icons";

const IconWrapper = styled.div`
  display: flex;
`;

const Svg = styled.svg`
  pointer-events: none;
  ${({ color }) =>
    color &&
    css`
      path {
        fill: ${color};
      }
    `}
`;

type IconProps = {
  height: number;
  width: number;
  color?: string;
  icon: (typeof Icons)[keyof typeof Icons];
  viewbox: string;
};
export const Icon = ({
  height,
  width,
  icon,
  color = "#fff",
  viewbox,
}: IconProps) => {
  return (
    <IconWrapper>
      <Svg
        color={color}
        width={width}
        height={height}
        viewBox={viewbox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </Svg>
    </IconWrapper>
  );
};
