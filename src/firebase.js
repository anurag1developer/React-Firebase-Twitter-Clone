import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9MVtnI_YrkFDHXENUmy_0Zfjxg-mg-tA",
  authDomain: "twitter-clone-react-fire-1071f.firebaseapp.com",
  projectId: "twitter-clone-react-fire-1071f",
  storageBucket: "twitter-clone-react-fire-1071f.appspot.com",
  messagingSenderId: "203849280780",
  appId: "1:203849280780:web:cb11b1c20b5ae0b529ed29",
  measurementId: "G-W7LTHHNYJP",
};

// init firebase app
const firebaseApp = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "posts");

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot.docs);
//   })
//   .catch((err) => console.log(err));

// const db = firebaseApp.firestore();
// const db = getStorage(firebaseApp);

export default colRef;
