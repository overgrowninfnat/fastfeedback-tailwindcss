export default function FreePlanEmptyState() {
  return (
    <div className='flex pt-32 pb-20 flex-col bg-white justify-items-center items-center border-gray-700 rounded-lg shadow-xl relative'>
      <div className='h-12 bg-gray-300 rounded-t-lg w-full absolute top-0' />
      <p className='text-sm md:text-2xl lg:text-3xl font-extrabold'>
        Get feedback on your site instantly
      </p>
      <p className='text-sm font-hairline md:font-light lg:text-md'>
        Start today, then grow with us <span>🌱</span>
      </p>
      <button className='mt-6 bg-black hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-md shadow-xs hover:shadow-lg transition duration-500'>
        Upgrade to Starter
      </button>
    </div>
  );
}
