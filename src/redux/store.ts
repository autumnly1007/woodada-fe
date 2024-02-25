import { configureStore } from '@reduxjs/toolkit';
import loading from './loading';
import auth from './auth';

const store = configureStore({
  reducer: { loading: loading.reducer, auth: auth.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
