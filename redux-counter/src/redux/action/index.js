import { INCREMENT, DECREMENT, RESET } from "../action-types";

export const incrementCount = (currentCount) => {
  return {
    type: INCREMENT
    
  };
};
export const decrementCount = (currentCount) => {
  return {
    type: DECREMENT
   
  };
};
export const resetCount = (currentCount) => {
  return {
    type: RESET
  };
};



