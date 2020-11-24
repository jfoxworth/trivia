// challenges Reducer

const challengesReducerDefaultState = {
};

export default (state = challengesReducerDefaultState, action) => {
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
