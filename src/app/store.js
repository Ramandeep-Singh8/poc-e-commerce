import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "main-root",
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
});

const reducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({ reducer, applyMiddleware });
const persistor = persistStore(store);
export { persistor };
export default store;
