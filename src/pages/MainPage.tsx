import * as React from 'react';
import styled from 'styled-components';
import { Users } from '../features';

const MainPageFlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const MainPage = () => <MainPageFlexContainer>
    <h1>Users list</h1>
    <Users />
</MainPageFlexContainer>

export default MainPage;
