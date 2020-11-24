// Questions Reducer

import questions from '../../components/sampleData/questions';

const questionsReducerDefaultState = questions;
  
  const questionsReducer = (state = questionsReducerDefaultState, action) => {

    switch (action.type) {
      
        case 'CREATE_QUESTION':
            console.log('created question', action.question);
            return state;

        case 'CREATE_QUESTION_ERROR':
          console.log('create question error', action.err);
          return state;

      default:
        return state;
    
    }
  
};

export default questionsReducer
  