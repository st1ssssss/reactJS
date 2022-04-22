import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./Profile/reducer";
import { dialogsReducer } from "./Dialogs/reducer";
import { messageReducer } from "./Messages/reducer";
import { gistsReducer } from './Gists/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    messages: messageReducer,
    gists: gistsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export const persistor = persistStore(store)