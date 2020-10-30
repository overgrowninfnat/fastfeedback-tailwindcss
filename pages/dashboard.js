import { useState } from 'react';
import useSwr from 'swr';

import DashboardShell from '../components/DashboardShell';
import SkeletonLoading from '../components/SkeletonLoading';
import PaidState from '../components/PaidState';
import FreePlanEmptyState from '../components/FreePlanState';
import { useAuth } from '../firebase/auth';
import fetcher from '../utils/fetcher';

export default function Dashboard() {
  const { user, signout } = useAuth();
  const { data } = useSwr(user ? ['/api/sites', user.token] : null, fetcher);
  const [paid, setPaid] = useState(true);
  return (
    <DashboardShell user={user} signout={signout}>
      {!user ? (
        <SkeletonLoading />
      ) : paid ? (
        <div>
          {data ? (
            <PaidState sites={data.sites !== undefined && data.sites} />
          ) : (
            <SkeletonLoading />
          )}
        </div>
      ) : (
        <FreePlanEmptyState />
      )}
    </DashboardShell>
  );
}
