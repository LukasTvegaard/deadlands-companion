import type { RadioGroupProps } from "react-aria-components";
import { RadioGroup, Radio } from "react-aria-components";
import styled from "styled-components";
import { Theme } from "../../Theme";

const RadioGroupStyled = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${Theme.Text};

  .react-aria-Radio {
    display: flex;
    padding: 2px 0;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: ${Theme.Text};
    cursor: pointer;
    forced-color-adjust: none;

    &:before {
      content: "";
      display: block;
      width: 26px;
      height: 26px;
      box-sizing: border-box;
      border: 2px solid gray;
      background: ${Theme.Surface[400]};
      border-radius: 26px;
      transition: all 200ms;
    }

    &[data-pressed]:before {
      border-color: slateblue;
    }

    &[data-selected] {
      &:before {
        border-color: slateblue;
        background: white;
        border-width: 0.55rem;
      }

      &[data-pressed]:before {
        border-color: slateblue;
      }
    }

    &[data-focus-visible]:before {
      outline: 2px solid blue;
      outline-offset: 2px;
    }
  }
`;

interface MyRadioGroupProps extends Omit<RadioGroupProps, "children"> {
  options: string[];
}

export function DLRadioGroup({ options, ...props }: MyRadioGroupProps) {
  return (
    <RadioGroupStyled aria-labelledby="radio-group-label" {...props}>
      {options.map((groupType) => (
        <Radio key={groupType} value={groupType}>
          {groupType}
        </Radio>
      ))}
    </RadioGroupStyled>
  );
}
