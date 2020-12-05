// These are action creators. This is possible because we are using the middleware thunk

export const editUser = (user, userId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call
      const firestore = getFirestore();
      firestore.collection('users')
      .doc(userId)
      .update(user)
      .then(()=>{

          // Fetch all games with user and update images
          firestore.collection('games')
          .where('playersArray', 'array-contains', userId )
          .get()
          .then(querySnapshot=>{
						querySnapshot.forEach(function(doc) {
							let docData = doc.data();
							let tempData=JSON.parse(JSON.stringify(docData.players));
              if (docData.playersArray[0]==userId)
              {
								tempData[0]['avatar']=user['avatar'];
								tempData[0]['avatarpage']=user['avatarpage'];
								firestore.collection('games')
                .doc(doc.id)
                .update({...docData, players:tempData })          
              }
              if (docData.playersArray[1]==userId)
              {
								tempData[1]['avatar']=user['avatar'];
								tempData[1]['avatarpage']=user['avatarpage'];
                firestore.collection('games')
                .doc(doc.id)
                .update({...docData, players:tempData })          
              }
						})
						})
			          
          dispatch({type:'EDIT_USER', question});
			}).catch((err)=>{
				dispatch({type:'EDIT_USER_ERROR', err});
      })
  }
}