import { Box } from '@mui/material';
import UsersTable from '../components/dashboard/UsersTable';
import { usersTableRows } from '../data/mockDashboard';

export default function TableListPage() {
  return (
    <Box className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Table list</h1>
          <p className="text-sm leading-6 text-slate-500">
            A clean user management table with status, onboarding progress, and last login details.
          </p>
        </div>
      </section>

      <UsersTable rows={usersTableRows} title="Users" />
    </Box>
  );
}