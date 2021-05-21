import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCl3BmmABfEEjNrSoDk8mdmdZzgqi-5_aM",
  authDomain: "fir-sample-efcb8.firebaseapp.com",
  projectId: "fir-sample-efcb8",
  storageBucket: "fir-sample-efcb8.appspot.com",
  messagingSenderId: "671278900418",
  appId: "1:671278900418:web:8667a52e513ac13186c75b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};