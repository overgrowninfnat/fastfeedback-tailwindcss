import MainBox from './MainBox';

export default function FreePlanEmptyState() {
  return (
    <MainBox>
      <p className='text-sm md:text-2xl lg:text-3xl font-extrabold'>
        Get feedback on your site instantly
      </p>
      <p className='text-sm font-hairline md:font-light lg:text-md'>
        Start today, then grow with us <span>🌱</span>
      </p>
      <button className='mt-6 bg-black hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-md shadow-xs hover:shadow-lg transition duration-500'>
        Upgrade to Starter
      </button>
    </MainBox>
  );
}
