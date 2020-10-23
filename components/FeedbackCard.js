import format from 'date-fns/format';

export default function FeedbackCard({ feedback }) {
  return (
    <>
      {feedback.map(({ feedbackId, author, createdAt, text }) => {
        return (
          <div key={feedbackId} className='mb-4'>
            <div className='border rounded py-4 px-10 flex flex-col justify-between leading-normal'>
              <div className='mb-8'>
                <div className='flex items-center'>
                  <div className='text-sm'>
                    <p className='text-gray-900 leading-none font-semibold'>
                      {author}
                    </p>
                    <p className='text-gray-600 mb-4'>
                      {format(createdAt, 'dd MMMM yyyy, HH:mm')}
                    </p>
                  </div>
                </div>
                <p className='text-gray-700 text-lg'>{text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
