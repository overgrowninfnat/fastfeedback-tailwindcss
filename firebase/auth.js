import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './firebase';

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
  const provider = new firebase.auth.GithubAuthProvider();

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        return result.user;
      })
      .catch((error) => console.log(error));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout,
  };
}
