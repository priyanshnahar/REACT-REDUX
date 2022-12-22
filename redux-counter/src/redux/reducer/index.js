import { INCREMENT, DECREMENT, RESET } from "../action-types";

const initialState = {
  count: 0,
  name: "myname"
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count+10,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count-10,
      };
    case RESET:
      return {
        ...state,
        count: 10,
      };
    default:
      return state;
  }
};

export default countReducer;