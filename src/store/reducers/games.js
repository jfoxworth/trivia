// Games Reducer

const gamesReducerDefaultState = {
};

export default (state = gamesReducerDefaultState, action) => {
  switch (action.type) {

    case 'CREATE_GAME':
      console.log('created game', action.game);
      return state;

    case 'SET_GAME':
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};
