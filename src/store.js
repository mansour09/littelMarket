import { createStore } from "redux"; //for creating redux store
import { persistStore, persistReducer } from "redux-persist"; //used for save data in browser
import reducers from "./Mystates and actions/reducer/reducer"; //combined data state action
import storage from "redux-persist/lib/storage"; //browser storage

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

//const store = createStore(reducers);

//export default store;