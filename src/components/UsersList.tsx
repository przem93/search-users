import * as React from 'react';
import styled from 'styled-components';
import { User } from '../features/users/types';
import { OrderedList } from './';
import Highlighter from 'react-highlight-words';

const Name = styled.span`
    color: #444;
    font-size: 16px;
`;

const UserName = styled.span`
    color: #ddd;
    font-size: 13px;
    display: inline-block;
    margin-left: 10px;
`;

interface UsersListProps {
    users: User[];
    textToMark: string;
}

const UsersList = ({ users, textToMark }: UsersListProps) => <OrderedList data={users}
    elementRenderer={({ name, username }) => <>
        <Name>
            <Highlighter textToHighlight={name} searchWords={[textToMark]} />  
        </Name> 
        <UserName>@{username}</UserName>
    </>} 
    keyGenerator={({ id }) => id} />

export default UsersList;
