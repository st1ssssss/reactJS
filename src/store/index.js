import { createStore, combineReducers } from "redux";
import { profileReducer } from "./Profile/reducer";
import { dialogsReducer } from "./Dialogs/reducer";
import { messageReducer } from "./Messages/reducer";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        dialogs: dialogsReducer,
        messages: messageReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())