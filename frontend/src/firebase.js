import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6vbJxDZSJksPaBhFkQtS_F60GBB1cMrM",
  authDomain: "stackoverflow-clone-8cb55.firebaseapp.com",
  projectId: "stackoverflow-clone-8cb55",
  storageBucket: "stackoverflow-clone-8cb55.appspot.com",
  messagingSenderId: "57993460908",
  appId: "1:57993460908:web:c1ea5712ff556990213309",
};
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
