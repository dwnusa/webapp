import { SET_PLAY } from "./../constants/ActionTypes";

interface AudioPlayerState {
  play: boolean;
}

const audioPlayerInitialState: AudioPlayerState = { play: false };

export default function audioPlayer(
  state = audioPlayerInitialState,
  action: any
): AudioPlayerState {
  switch (action.type) {
    case SET_PLAY:
      return { ...state, play: action.play };
    default:
      return state;
  }
}
