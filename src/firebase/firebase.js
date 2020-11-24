
import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAm7yx6yDb-mCnXYNhDmLtHVVatFcauLBE",
    authDomain: "triviatime-e7aa2.firebaseapp.com", 
    databaseURL: "https://triviatime-e7aa2.firebaseio.com", 
    projectId: 'triviatime-e7aa2',
    storageBucket: "triviatime-e7aa2.appspot.com", 
    messagingSenderId: "72246544330",
    appId: "1:72246544330:web:8cdbd49485431cf8c33133",
    measurementId: "G-09SXMPWPVN"
//    appId: "1:72246544330:web:a25df74fba001991c33133",
//    measurementId: "G-EVKVGQL5FJ"
  };
  firebase.initializeApp(config);
  

export default firebase;
/*
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAm7yx6yDb-mCnXYNhDmLtHVVatFcauLBE",
    authDomain: "triviatime-e7aa2.firebaseapp.com",
    databaseURL: "https://triviatime-e7aa2.firebaseio.com",
    projectId: "triviatime-e7aa2",
    storageBucket: "triviatime-e7aa2.appspot.com",
    messagingSenderId: "72246544330",
    appId: "1:72246544330:web:a25df74fba001991c33133",
    measurementId: "G-EVKVGQL5FJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/