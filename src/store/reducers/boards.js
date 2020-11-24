// Boards Reducer

const boardsReducerDefaultState = {
};

export default (state = boardsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOARD':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
