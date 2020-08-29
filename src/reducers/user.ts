import { SET_SHOW_SURVEY_POPUP } from "./../constants/ActionTypes";

export interface UserState {
  showSurveyPopup: boolean;
}

const userInitialState: UserState = { showSurveyPopup: true };

export default function user(state = userInitialState, action: any): UserState {
  switch (action.type) {
    case SET_SHOW_SURVEY_POPUP:
      return { ...state, showSurveyPopup: action.show };
    default:
      return state;
  }
}
