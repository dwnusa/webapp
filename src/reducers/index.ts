import { SET_PLAY } from "./../constants/ActionTypes";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["audioPlayer"],
};

interface AudioPlayerInitialState {
  play: boolean;
}

const audioPlayerInitialState: AudioPlayerInitialState = { play: false };

function audioPlayer(
  state = audioPlayerInitialState,
  action: any
): AudioPlayerInitialState {
  switch (action.type) {
    case SET_PLAY:
      return { ...state, play: action.play };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  audioPlayer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
