import { useState } from 'react';
import DashboardShell from '../components/DashboardShell';
import { useAuth } from '../firebase/auth';

export default function Home() {
  const auth = useAuth();
  const [paid, setPaid] = useState(true);
  return (
    <>
      {auth.user ? (
        <div>
          <DashboardShell user={auth.user} paid={paid} />
          <button
            className='bg-black hover:bg-gray-900 py-2 px-4 text-white text-md rounded mt-2 shadow-md hover:shadow-xl transition duration-500'
            onClick={auth.signout}
          >
            Signout
          </button>
        </div>
      ) : (
        <div className='bg-gray-200 w-screen h-screen flex flex-col justify-center items-center'>
          <svg
            className='w-32 h-32 fill-current text-black'
            viewBox='0 0 46 46'
          >
            <path d='M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zm-5.135 14.121C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z' />
          </svg>
          <button
            className='flex items-center bg-black hover:bg-gray-900 py-2 px-4 text-white text-md rounded mt-2 shadow-md hover:shadow-xl transition duration-500'
            onClick={auth.signinWithGithub}
          >
            <svg className='w-6 h-6 fill-current text-white mr-3'>
              <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
            </svg>
            Signin with Github
          </button>
        </div>
      )}
    </>
  );
}
