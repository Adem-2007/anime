// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/UserSlice';
import storage from 'redux-persist/lib/storage'; // default localStorage
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false
})
});

const persistor = persistStore(store);

export { store, persistor };
