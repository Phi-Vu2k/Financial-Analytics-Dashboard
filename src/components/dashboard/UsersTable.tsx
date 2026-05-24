import {
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import type { UsersTableProps } from '../../types/dashboard';

const statusVariant: Record<UsersTableProps['rows'][number]['status'], 'success' | 'warning' | 'default'> = {
  Active: 'success',
  Pending: 'warning',
  Suspended: 'default',
};

export default function UsersTable({ rows, title = 'Team members' }: UsersTableProps) {
  return (
    <Card elevation={0} className="rounded-2xl border border-slate-200 bg-white" sx={{ boxShadow: 'none' }}>
      <CardContent className="p-5">
        <div className="mb-4">
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-500">Overview of user access and onboarding progress</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-100">
          <Table size="small">
            <TableHead>
              <TableRow className="bg-slate-50">
                <TableCell className="font-semibold text-slate-600">Name</TableCell>
                <TableCell className="font-semibold text-slate-600">Role</TableCell>
                <TableCell className="font-semibold text-slate-600">Department</TableCell>
                <TableCell className="font-semibold text-slate-600">Status</TableCell>
                <TableCell className="font-semibold text-slate-600">Progress</TableCell>
                <TableCell className="font-semibold text-slate-600">Last login</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>
                    <div className="font-semibold text-slate-900">{row.name}</div>
                    <div className="text-sm text-slate-500">{row.email}</div>
                  </TableCell>
                  <TableCell className="text-slate-700">{row.role}</TableCell>
                  <TableCell className="text-slate-700">{row.department}</TableCell>
                  <TableCell>
                    <Chip label={row.status} size="small" color={statusVariant[row.status]} variant="outlined" />
                  </TableCell>
                  <TableCell className="min-w-40">
                    <div className="flex items-center gap-3">
                      <div className="min-w-12 text-sm font-semibold text-slate-700">{row.progress}%</div>
                      <LinearProgress
                        variant="determinate"
                        value={row.progress}
                        className="h-2 w-full rounded-full bg-slate-100"
                        sx={{
                          '& .MuiLinearProgress-bar': {
                            borderRadius: '999px',
                            backgroundColor: row.status === 'Suspended' ? '#94a3b8' : '#2563eb',
                          },
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-700">{row.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}