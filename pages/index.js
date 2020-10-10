import { useAuth } from '../firebase/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      {auth.user ? (
        <div className='p-8'>
          {auth.user.name}
          <div>
            <button
              className='bg-black hover:bg-gray-900 py-2 px-4 text-white text-md rounded mt-2 shadow-md hover:shadow-xl transition duration-500'
              onClick={auth.signout}
            >
              Signout
            </button>
          </div>
        </div>
      ) : (
        <div className='p-8'>
          <button
            className='bg-black hover:bg-gray-900 py-2 px-4 text-white text-md rounded mt-2 shadow-md hover:shadow-xl transition duration-500'
            onClick={auth.signinWithGithub}
          >
            Signin with Github
          </button>
        </div>
      )}
    </div>
  );
}
