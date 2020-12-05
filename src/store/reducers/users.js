// users Reducer

const usersReducerDefaultState = {
};

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {

    case 'CREATE_USER':
      console.log('created user', action.user);
      return state;

    case 'EDIT_USER':
      console.log('edited user', action.user);
      return state;


        case 'SET_USER':
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};
