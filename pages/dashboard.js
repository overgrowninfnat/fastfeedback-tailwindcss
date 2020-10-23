import { useState } from 'react';
import useSwr from 'swr';

import DashboardShell from '../components/DashboardShell';
import SkeletonLoading from '../components/SkeletonLoading';
import PaidState from '../components/PaidState';
import FreePlanEmptyState from '../components/FreePlanState';
import { useAuth } from '../firebase/auth';
import fetcher from '../utils/fetcher';
import compare from '../firebase/util/sortByDate';

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSwr('/api/sites', fetcher);
  const [paid, setPaid] = useState(true);
  return (
    <DashboardShell user={auth.user} signout={auth.signout}>
      {!auth.user ? (
        <SkeletonLoading />
      ) : paid ? (
        <div>
          {data ? <PaidState sites={data.sites.sort(compare)} /> : <SkeletonLoading />}
        </div>
      ) : (
        <FreePlanEmptyState />
      )}
    </DashboardShell>
  );
}
