import { Box, Card, CardContent } from '@mui/material';
import SettingsForm from '../components/dashboard/SettingsForm';
import { defaultSettingsValues } from '../data/mockDashboard';

export default function UserProfilePage() {
  return (
    <Box className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-xl font-semibold text-white">
              AM
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Avery Morgan</h1>
              <p className="text-sm text-slate-500">Finance Operations Lead</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Card elevation={0} className="rounded-2xl border border-slate-200 bg-slate-50" sx={{ boxShadow: 'none' }}>
              <CardContent className="p-4">
                <div className="text-sm text-slate-500">Projects</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">14</div>
              </CardContent>
            </Card>
            <Card elevation={0} className="rounded-2xl border border-slate-200 bg-slate-50" sx={{ boxShadow: 'none' }}>
              <CardContent className="p-4">
                <div className="text-sm text-slate-500">Approvals</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">98%</div>
              </CardContent>
            </Card>
            <Card elevation={0} className="rounded-2xl border border-slate-200 bg-slate-50" sx={{ boxShadow: 'none' }}>
              <CardContent className="p-4">
                <div className="text-sm text-slate-500">Response time</div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">2.1h</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SettingsForm initialValues={defaultSettingsValues} />
    </Box>
  );
}