import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'cejumic',
      storage,
      whitelist: ['auth']
    },
    reducers
  );

  return persistedReducers;
};
