export default function MainBox({ children }) {
  return (
    <div className='flex pt-32 pb-20 flex-col bg-white justify-items-center items-center border-gray-700 rounded-lg shadow-xl relative'>
      <div className='h-12 bg-gray-300 rounded-t-lg w-full absolute top-0' />
      {children}
    </div>
  );
}
