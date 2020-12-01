// These are action creators. This is possible because we are using the middleware thunk



export const createChallenge =  (userObj, gameId, challenge, gameType) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => 
  new Promise(function(resolve, reject) {
    {
      // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('challenges').add({
          ...challenge,
          challengedId : userObj.id,
          challengedName : userObj.username,
          challengedAvatar : userObj.avatar,
          challengerId : authorId,
          challengerName : profile.username,
          challengerAvatar : profile.avatar,
          dateCreated:new Date(),
          gameId : gameId,
          gameType : gameType ? gameType : 0,
          accepted : false,
      }).then((docRef)=>{
          dispatch({type:'CREATE_CHALLENGE', challenge});
          resolve(docRef.id);
      
      }).catch((err)=>{
          dispatch({type:'CREATE_CHALLENGE_ERROR', err});
      })
  }
})
}



export const editChallenge = (challenge, challengeId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => 
    new Promise(function(resolve, reject) {
    {    // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('challenges')
      .doc(challengeId)
      .update(challenge)
      .then(()=>{
          dispatch({type:'EDIT_CHALLENGE', challenge});
          resolve();
      
      }).catch((err)=>{
          dispatch({type:'EDIT_CHALLENGE_ERROR', err});
      })
  }
})
}