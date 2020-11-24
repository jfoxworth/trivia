// These are action creators. This is possible because we are using the middleware thunk



export const createBoard = (board) => {
  console.log(board);
  return (dispatch, getState, {getFirebase, getFirestore}) => 
  new Promise(function(resolve, reject) {
    {
      // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('boards').add({
          ...board,
          userId : authorId,
          userName : profile.username,
          userEmail : authorEmail,
          userAvatar : profile.avatar,
          dateCreated:new Date()
      }).then(()=>{
          dispatch({type:'CREATE_BOARD', board});
          resolve(docRef.id);
      
      }).catch((err)=>{
          dispatch({type:'CREATE_BOARD_ERROR', err});
      })
  }
})
}




export const editBoard = (board, boardId) => {
  console.log(boardId);
  console.log(board);
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      console.log(board);
      firestore.collection('boards')
      .doc(boardId)
      .update(board)
      .then(()=>{
          dispatch({type:'EDIT_BOARD', board});
      
      }).catch((err)=>{
          dispatch({type:'EDIT_BOARD_ERROR', err});
      })
  }
}