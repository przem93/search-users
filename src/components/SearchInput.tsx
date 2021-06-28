import * as React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = styled.input`
    border: 1px solid #000;
    width: 100%;
    font-size: 18px;
    line-height: 25px;
    padding-left: 5px;
`;

const SearchInput = ({ onChange }: SearchInputProps) => (
    <Input placeholder="Search by user name" onChange={onChange} />
)

export default SearchInput;
