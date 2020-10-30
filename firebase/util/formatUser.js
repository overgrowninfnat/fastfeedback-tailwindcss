export default function formatUser(rawUser) {
  return {
    uid: rawUser.uid,
    name: rawUser.displayName,
    email: rawUser.email,
    photoUrl: rawUser.photoURL,
    provider: rawUser.providerData[0].providerId,
    token: rawUser.xa,
  };
}
