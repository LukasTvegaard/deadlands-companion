import styled from "styled-components";

const SelectStyle = styled.select`
  text-overflow: ellipsis;
  font-size: 16px;
  height: 36px;
  width: 150px;
  padding: 8px 4px;
  border-radius: 4px;
  background-color: #fff;
`;

const Option = styled.option`
  font-size: 16px;
  padding: 8px 0px;
`;

type SelectOption = {
  value: string;
  label: string;
  disabled: boolean;
};
type SelectProps = {
  options: SelectOption[];
  value: string;
  setValue: (value: string) => void;
};
export const Select = ({
  options,
  value,
  setValue,
}: SelectProps): JSX.Element => {
  return (
    <SelectStyle value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </Option>
      ))}
    </SelectStyle>
  );
};
