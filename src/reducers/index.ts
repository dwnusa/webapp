import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import audioPlayer from "./audioPlayer";
import user from "./user";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["audioPlayer"],
};

const rootReducer = combineReducers({
  audioPlayer,
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
