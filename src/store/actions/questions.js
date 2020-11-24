// These are action creators. This is possible because we are using the middleware thunk


export const createQuestion = (question, ) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => 
    new Promise(function(resolve, reject) {
        {
        // make async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const authorEmail = getState().firebase.auth.email;
        firestore.collection('questions').add({
            ...question,
            userId : authorId,
            userName : profile.username,
            userEmail : authorEmail,
            userAvatar : profile.avatar,
            dateCreated:new Date()
        }).then((docRef)=>{
            dispatch({type:'CREATE_QUESTION', question});
            resolve(docRef.id);
        }).catch((err)=>{
            dispatch({type:'CREATE_QUESTION_ERROR', err});
        })
    }
})
}




export const editQuestion = (question, questionId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const authorEmail = getState().firebase.auth.email;
        firestore.collection('questions')
        .doc(questionId)
        .update(question)
        .then(()=>{
            dispatch({type:'EDIT_QUESTION', question});
        
        }).catch((err)=>{
            dispatch({type:'EDIT_QUESTION_ERROR', err});
        })
    }
}