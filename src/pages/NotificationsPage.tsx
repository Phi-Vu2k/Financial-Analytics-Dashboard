import { Box, Card, CardContent, Chip, Stack } from '@mui/material';
import { notificationItems } from '../data/mockDashboard';

const chipColorMap: Record<string, 'error' | 'warning' | 'info' | 'success' | 'default'> = {
  security: 'error',
  billing: 'warning',
  system: 'info',
  product: 'success',
};

export default function NotificationsPage() {
  const unreadCount = notificationItems.filter((item) => item.unread).length;

  return (
    <Box className="space-y-6 p-4 sm:p-6 lg:p-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Notifications</h1>
            <p className="text-sm leading-6 text-slate-500">
              Keep track of product, billing, and security alerts in one centralized feed.
            </p>
          </div>
          <Chip label={`${unreadCount} unread`} color="primary" variant="outlined" className="w-fit" />
        </div>
      </section>

      <Stack spacing={2.25}>
        {notificationItems.map((item) => (
          <Card
            key={item.id}
            elevation={0}
            className={`rounded-2xl border ${item.unread ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200 bg-white'}`}
            sx={{ boxShadow: 'none' }}
          >
            <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-base font-semibold text-slate-900">{item.title}</div>
                  <Chip label={item.category} size="small" color={chipColorMap[item.category]} variant="outlined" />
                </div>
                <div className="text-sm leading-6 text-slate-600">{item.body}</div>
              </div>
              <div className="text-sm font-medium text-slate-500">{item.time}</div>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}