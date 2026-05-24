import { Box, Button } from '@mui/material';
import UpgradePlanCard from '../components/dashboard/UpgradePlanCard';
import { upgradePlans } from '../data/mockDashboard';

export default function UpgradePage() {
  return (
    <Box className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-sm">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">Upgrade your plan</h1>
          <p className="text-sm leading-6 text-blue-50">
            Unlock collaboration, reporting, and support features designed for growing finance teams.
          </p>
          <Button variant="contained" className="rounded-full bg-white px-5 py-2.5 text-slate-900 shadow-none">
            Talk to sales
          </Button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {upgradePlans.map((plan) => (
          <UpgradePlanCard key={plan.name} plan={plan} />
        ))}
      </section>
    </Box>
  );
}