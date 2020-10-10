import FreePlanEmptyState from './FreePlanEmptyState';
import PaidEmptyState from './PaidEmptyState';

export default function DashboardShell({ user, paid }) {
  return (
    <>
      {/* header */}
      <div className='h-2 bg-cyan' />
      <div className='flex justify-between px-6 md:px-10 lg:px-12 py-2 shadow-md'>
        {/* right-side */}
        <div className='flex items-center space-x-4'>
          <svg
            className='w-10 h-10 fill-current text-black'
            viewBox='0 0 46 32'
          >
            <path d='M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zm-5.135 14.121C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z' />
          </svg>
          <a className='hidden md:inline-block' href='#'>
            Sites
          </a>
          <a className='hidden md:inline-block' href='#'>
            Feedback
          </a>
        </div>
        {/* left-side */}
        <div className='flex items-center space-x-4'>
          <a className='hidden md:inline-block' href='#'>
            Account
          </a>
          <img
            className='w-10 h-10 rounded-full'
            src={user.photoUrl}
            alt='Profile image'
          />
        </div>
      </div>
      {/* main section */}
      <div className='bg-gray-200 h-screen py-12'>
        <div className='container mx-auto w-3/4'>
          {/* breadcumbs + page title */}
          <div className='text-xs font-light'>Sites</div>
          <div className='text-3xl font-extrabold mb-6'>My Sites</div>
          {/* box content */}
          {paid ? <PaidEmptyState /> : <FreePlanEmptyState />}
        </div>
      </div>
      {/* call to action */}
      {<button></button>}
    </>
  );
}
