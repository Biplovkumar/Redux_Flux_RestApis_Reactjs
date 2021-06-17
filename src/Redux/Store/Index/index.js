import { createStore, applyMiddleware } from 'redux';
import appreducer from '../../MainReducer/Index'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'root',
    storage:localStorage,
    timeout: null, 
    // blacklist: ['navigation', 'isLoading', 'hasErrored']
    // whitelist:['login']
  }

const persistedReducer = persistReducer(persistConfig, appreducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);