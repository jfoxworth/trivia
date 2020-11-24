// tags Reducer


const tagsReducerDefaultState = {};
  
  const tagsReducer = (state = tagsReducerDefaultState, action) => {

    switch (action.type) {
      
        case 'CREATE_TAG':
            console.log('created tag', action.tag);
            return state;

        case 'CREATE_TAG_ERROR':
          console.log('create tag error', action.err);
          return state;

      default:
        return state;
    
    }
  
};

export default tagsReducer
  