import { Box, Button } from '@mui/material';
import ActivityList from '../components/dashboard/ActivityList';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatCard from '../components/dashboard/StatCard';
import UsersTable from '../components/dashboard/UsersTable';
import { activityItems, dashboardStats, revenueData, usersTableRows } from '../data/mockDashboard';

export default function DashboardPage() {
  return (
    <Box className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-2">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-slate-300">Dashboard</div>
          <h1 className="text-3xl font-semibold tracking-tight">Financial overview for the current quarter</h1>
          <p className="max-w-xl text-sm leading-6 text-slate-300">
            Track revenue trends, monitor team activity, and keep an eye on the most important business metrics in one
            place.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="contained" className="rounded-full bg-white px-5 py-2.5 text-slate-900 shadow-none">
            Export report
          </Button>
          <Button variant="outlined" className="rounded-full border-white px-5 py-2.5 text-white">
            New insight
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
        <RevenueChart
          data={revenueData}
          subtitle="Revenue and profit trends based on the latest twelve months of activity"
        />
        <ActivityList items={activityItems} />
      </section>

      <section>
        <UsersTable rows={usersTableRows} title="Workspace users" />
      </section>
    </Box>
  );
}