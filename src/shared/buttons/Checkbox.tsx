import { Checkbox as AriaCheckbox } from "react-aria-components";
import type { CheckboxProps } from "react-aria-components";
import styled from "styled-components";

const CheckboxStyle = styled(AriaCheckbox)`
  --label-color: var(--spectrum-alias-text-color);
  --deselected-color: gray;
  --deselected-color-pressed: dimgray;
  --selected-color: slateblue;
  --selected-color-pressed: lch(from slateblue calc(l - 10%) c h);
  --checkmark-color: white;
  --invalid-color: var(--spectrum-global-color-red-600);
  --invalid-color-pressed: var(--spectrum-global-color-red-700);

  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid var(--deselected-color);
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--checkmark-color);
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: var(--deselected-color-pressed);
  }

  &[data-focus-visible] .checkbox {
    box-shadow: 0 0 0 2px var(--spectrum-alias-background-color-default),
      0 0 0 4px var(--selected-color);
  }
  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: var(--selected-color);
      background: var(--selected-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--selected-color-pressed);
      background: var(--selected-color-pressed);
    }

    & svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    & svg {
      stroke: none;
      fill: var(--checkmark-color);
    }
  }
`;

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <CheckboxStyle {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </CheckboxStyle>
  );
}
