import { Content } from "types";
import * as types from "../constants/ActionTypes";

export const setPlay = (play: boolean) => ({
  type: types.SET_PLAY,
  play,
});

export const setShowSurveyPopup = (show: boolean) => ({
  type: types.SET_SHOW_SURVEY_POPUP,
  show,
});

export const addContent = (content: Content) => ({
  type: types.ADD_CONTENT,
  content,
});
