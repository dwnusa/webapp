import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import audioPlayer from "./audioPlayer";
import user from "./user";
import content from "./content";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["audioPlayer"],
};

const rootReducer = combineReducers({
  audioPlayer,
  user,
  content,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
