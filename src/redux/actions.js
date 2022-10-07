
export const addComments = (comments) => {
  return {
      type: 'ADD_COMMENTS',
      value: comments
  }
}



export const addLost = (lost) => {
  return {
    type: "ADD_LOST",
    value: lost,
  };
};



export const removeLost = (index) => {
  return {
    type: "REMOVE_LOST",
    value: index,
  };
};



export const addFound = (lost) => {
  return {
    type: "ADD_FOUND",
    value: lost,
  };
};


export const removeFound = (index) => {
  return {
    type: "REMOVE_FOUND",
    value: index,
  };
};





