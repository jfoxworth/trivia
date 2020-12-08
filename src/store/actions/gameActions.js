// These are action creators. This is possible because we are using the middleware thunk



export const createGame =  (game) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => 
  new Promise(function(resolve, reject) {
    {
      // make async call
      const firestore = getFirestore();
      let profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      profile['id']=authorId;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('games').add({
          ...game,
          userId : authorId,
          userName : profile.username,
          userEmail : authorEmail,
          userAvatar : profile.avatar,
          dateCreated:new Date(),
          players:[{...profile, score:0}],
          playersArray:[authorId],
          challengeArray:[authorId],
      }).then((docRef)=>{
          dispatch({type:'CREATE_GAME', game});
          resolve(docRef.id);
      
      }).catch((err)=>{
          dispatch({type:'CREATE_GAME_ERROR', err});
      })
  }
})
}



export const editGame = (game, gameId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => 
    new Promise(function(resolve, reject) {
    {    // make async call
          const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('games')
      .doc(gameId)
      .update(game)
      .then(()=>{
          dispatch({type:'EDIT_GAME', game});
          resolve();
      
      }).catch((err)=>{
          dispatch({type:'EDIT_GAME_ERROR', err});
      })
  }
})
}