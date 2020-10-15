import firebase from './firebase';

export function createUser(uid, data) {
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set(
      { uid, ...data, createdAt: firebase.firestore.Timestamp.now().seconds },
      { merge: true }
    );
}

export function createSite(authorId, data) {
  return firebase.firestore().collection('sites').add({
    authorId: authorId,
    createdAt: new firebase.firestore.Timestamp.now().seconds,
    ...data
  });
}
