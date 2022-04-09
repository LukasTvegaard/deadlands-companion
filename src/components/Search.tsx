import React, { useState } from "react";
import styled from "styled-components";
import { Cross } from "./icons/Cross";

type SearchProps = {
  placeholder: string;
  callback: (text: string) => void;
};

const SearchWrapper = styled.div`
  display: flex;
`;

const SearchField = styled.input`
  height: 30px;
  font-size: 16px;
`;

const ClearButton = styled.button`
  margin-left: -1px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Search = ({ callback, placeholder }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    callback(value);
  };

  const handleInputClear = () => {
    setInputValue("");
    callback("");
  };

  return (
    <SearchWrapper>
      <SearchField
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <ClearButton onClick={handleInputClear}>
        <Cross />
      </ClearButton>
    </SearchWrapper>
  );
};
