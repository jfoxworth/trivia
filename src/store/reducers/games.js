// Games Reducer

const gamesReducerDefaultState = {
};

export default (state = gamesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_GAME':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
