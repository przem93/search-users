import * as React from 'react';
import { useGetUsers } from './api';
import { SearchInput, UsersList } from '../../components';
import { User } from './types';
import styled from 'styled-components';

const filterUsersByName = (users: User[], filterText: string): User[] => {
    const filterTextLowerCased = filterText.toLowerCase();

    return users.filter(({ name }) => name.toLocaleLowerCase().includes(filterTextLowerCased))
}

const UsersContainer = styled.div`
    width: 350px;
`;

const Users = () => {
    const [usersFilterText, setUsersFilterText] = React.useState('');
    const searchInputBlurHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUsersFilterText(e.currentTarget.value);
    }, [setUsersFilterText]);
    const { data: users } = useGetUsers(); 

    return <UsersContainer>
        <SearchInput onChange={searchInputBlurHandler} />
        {users && <UsersList users={filterUsersByName(users, usersFilterText)}
            textToMark={usersFilterText} />}
    </UsersContainer>
}

export default Users;
