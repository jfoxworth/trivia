// These are action creators. This is possible because we are using the middleware thunk



export const createTag = (tag) => {
  console.log(tag);
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      firestore.collection('tags').add({
          ...tag,
          userId : authorId,
          username : profile.username,
          userEmail : authorEmail,
          userAvatar : profile.avatar,
          dateCreated:new Date()
      }).then(()=>{
          dispatch({type:'CREATE_TAG', tag});
      
      }).catch((err)=>{
          dispatch({type:'CREATE_TAG_ERROR', err});
      })
  }
}




export const editTag = (tag, tagId) => {
  console.log(tagId);
  console.log(tag);
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorEmail = getState().firebase.auth.email;
      console.log(tag);
      firestore.collection('tags')
      .doc(tagId)
      .update(tag)
      .then(()=>{
          dispatch({type:'EDIT_TAG', tag});
      
      }).catch((err)=>{
          dispatch({type:'EDIT_TAG_ERROR', err});
      })
  }
}