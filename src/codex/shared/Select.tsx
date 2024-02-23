import styled from "styled-components";

const SelectStyle = styled.select`
  font-size: 16px;
  height: 36px;
  width: 150px;
`;

const Option = styled.option`
  font-size: 16px;
  padding: 8px 0px;
`;

type SelectProps = {
  options: string[];
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
        <Option key={option}>{option}</Option>
      ))}
    </SelectStyle>
  );
};
