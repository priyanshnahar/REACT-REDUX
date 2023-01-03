export const addToDo = (data) => {
  return {
    type: "ADD_TO_DO",
    payload: {
      id: new Date().getTime().toString(),
      data:data
    } 
  };
};

export const deleteToDo = () => {
  return {
    type: "DELETE_TO_DO",
  };
};

export const removeToDo = () => {
  return {
    type: "REMOVE_TO_DO",
  };
};
