import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => `users`,
        }),
    }),
});

export default usersApi;

export const useGetUsers = usersApi.endpoints.getUsers.useQuery;
