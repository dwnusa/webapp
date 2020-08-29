import { SET_PLAY } from "./../constants/ActionTypes";
import { combineReducers } from "redux";

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

export default rootReducer;
