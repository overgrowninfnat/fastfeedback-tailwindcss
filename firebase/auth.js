import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './firebase';
import formatUser from './util/formatUser';
import { createUser } from './firestore';

const authContext = createContext();

export default function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const provider = new firebase.auth.GithubAuthProvider();

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        const formattedUser = formatUser(user);
        createUser(formattedUser.uid, formattedUser);
      })
      .catch((error) => setError(error));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(formatUser(user));
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    signinWithGithub,
    signout,
  };
}
