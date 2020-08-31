import {
  ADD_CONTENT,
  DELETE_CONTENT,
  ADD_CONTENT_FIRST_ORDER,
} from "constants/ActionTypes";
import { Content } from "types";

interface contentState {
  contents: Content[];
}

const contentInitialState: contentState = { contents: [] };

export default function content(
  state = contentInitialState,
  action: any
): contentState {
  const existId = (): boolean =>
    state.contents.some(
      (stateContent) => stateContent.id === action.content.id
    );
  const filteredContents = (id: number) =>
    state.contents.filter((stateContent) => stateContent.id !== id);
  switch (action.type) {
    case ADD_CONTENT:
      if (existId()) {
        return state;
      } else {
        return { ...state, contents: [...state.contents, action.content] };
      }
    case ADD_CONTENT_FIRST_ORDER:
      if (existId()) {
        return {
          ...state,
          contents: [action.content, ...filteredContents(action.content.id)],
        };
      } else {
        return { ...state, contents: [action.content, ...state.contents] };
      }
    case DELETE_CONTENT:
      return {
        ...state,
        contents: filteredContents(action.id),
      };
    default:
      return state;
  }
}
