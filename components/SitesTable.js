import format from 'date-fns/format';
import Link from 'next/link';

export default function SitesTable({ sites }) {
  return (
    <div className='w-80%'>
      <table className='table-fixed'>
        <thead>
          <tr>
            <th className='w-1/3 px-4 py-2 bg-gray-400 rounded-tl-lg'>Name</th>
            <th className='w-1/3 px-4 py-2 bg-gray-400'>Site Link</th>
            <th className='w-1/4 px-4 py-2 bg-gray-400'>Feedback Link</th>
            <th className='w-1/3 px-4 py-2 bg-gray-400 rounded-tr-lg'>
              Date Added
            </th>
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.link}>
              <td className='border px-4 py-2 font-semibold'>{site.name}</td>
              <td className='border px-4 py-2'>{site.link}</td>
              <td className='border px-4 py-2 text-blue-500 hover:text-blue-800 transfom duration-500'>
                {site.siteId ? (
                  <Link href={`/p/${site.siteId}`}>View Feedback</Link>
                ) : null}
              </td>
              <td className='border px-4 py-2'>
                {format(site.createdAt, 'dd-MM-yy')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
