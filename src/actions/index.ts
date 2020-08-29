import * as types from "../constants/ActionTypes";

export const setPlay = (play: boolean) => ({
  type: types.SET_PLAY,
  play,
});
