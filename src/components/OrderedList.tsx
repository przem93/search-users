import * as React from 'react';
import styled from 'styled-components';

interface OrderedList<ListElementType extends unknown> {
    data: ListElementType[];
    elementRenderer: (item: ListElementType) => React.ReactNode;
    keyGenerator: (item: ListElementType) => string;
}


const OrderedListStyled = styled.ol`
    color: #ddd;
`;

const OrderedList = <ListElementType extends unknown>({
    data, elementRenderer, keyGenerator
}: OrderedList<ListElementType>) => <OrderedListStyled>
    {data.map((listElement: ListElementType) => <li key={keyGenerator(listElement)}>
        {elementRenderer(listElement)}
    </li>)}
</OrderedListStyled>

export default OrderedList;
