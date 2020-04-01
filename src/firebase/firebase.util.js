import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjZRmLksw5kftEcLUoQI6gRSEMWMi_eRE",
  authDomain: "ecommerce-web-ae56b.firebaseapp.com",
  databaseURL: "https://ecommerce-web-ae56b.firebaseio.com",
  projectId: "ecommerce-web-ae56b",
  storageBucket: "ecommerce-web-ae56b.appspot.com",
  messagingSenderId: "552668209049",
  appId: "1:552668209049:web:eac1c9f5bc15ae1339fd08",
  measurementId: "G-0S7330M2KL"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creatins user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;