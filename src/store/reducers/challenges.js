// challenges Reducer

const challengesReducerDefaultState = {
};

export default (state = challengesReducerDefaultState, action) => {
  switch (action.type) {

    case 'CREATE_CHALLENGE':
      console.log('created challegne', action.challenge);
      return state;

      case 'SET_CHALLENGE':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
