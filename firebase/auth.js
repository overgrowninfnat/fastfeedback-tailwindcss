import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './firebase';
import formatUser from './util/formatUser';
import { createUser } from './firestore';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        const formattedUser = formatUser(user);
        const { token, ...userWithoutToken } = formattedUser;
        createUser(formattedUser.uid, userWithoutToken);
      })
      .catch((error) => setError(error));
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(
        () => (
          Cookies.remove('easy-feedback-auth'), setUser(false), router.push('/')
        )
      )
      .catch((error) => setError(error));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(formatUser(user));
        Cookies.set('easy-feedback-auth', true, {
          expires: 1,
        });
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
