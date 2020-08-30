import { DELETE_CONTENT } from "./../constants/ActionTypes";
import { ADD_CONTENT } from "constants/ActionTypes";
import { Content } from "types";

interface contentState {
  contents: Content[];
}

const contentInitialState: contentState = { contents: [] };

export default function content(
  state = contentInitialState,
  action: any
): contentState {
  switch (action.type) {
    case ADD_CONTENT:
      if (
        state.contents.find(
          (stateContent) => stateContent.id === action.content.id
        )
      ) {
        return state;
      } else {
        return { ...state, contents: [...state.contents, action.content] };
      }
    case DELETE_CONTENT:
      const filteredContents = state.contents.filter(
        (stateContent) => stateContent.id !== action.id
      );
      return {
        ...state,
        contents: filteredContents,
      };
    default:
      return state;
  }
}
