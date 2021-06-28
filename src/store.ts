import { configureStore } from '@reduxjs/toolkit';
import usersApi from './features/users/api';

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
})
