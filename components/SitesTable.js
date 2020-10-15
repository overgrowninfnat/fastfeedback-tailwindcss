import fromUnixTime from 'date-fns/fromUnixTime';

export default function SitesTable({ sites }) {
  return (
    <div className='w-80%'>
      <table className='table-fixed'>
        <thead>
          <tr>
            <th className='w-1/3 px-4 py-2 bg-gray-400 rounded-tl-lg'>Name</th>
            <th className='w-1/3 px-4 py-2 bg-gray-400'>Site Link</th>
            <th className='w-1/4 px-4 py-2 bg-gray-400'>Feedback Link</th>
            <th className='w-1/4 px-4 py-2 bg-gray-400 rounded-tr-lg'>
              Date Added
            </th>
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.siteId}>
              <td className='border px-4 py-2'>{site.name}</td>
              <td className='border px-4 py-2'>{site.link}</td>
              <td className='border px-4 py-2'>View Feedback</td>
              <td className='border px-4 py-2'>
                {fromUnixTime(site.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
