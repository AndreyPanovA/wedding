import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {auth} from "./reducers";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
  auth,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store
