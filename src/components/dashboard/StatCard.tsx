import { Card, CardContent, LinearProgress } from '@mui/material';
import type { StatCardProps } from '../../types/dashboard';

const trendStyles: Record<StatCardProps['direction'], string> = {
  up: 'text-emerald-600',
  down: 'text-rose-600',
  neutral: 'text-slate-500',
};

const progressValues: Record<StatCardProps['direction'], number> = {
  up: 78,
  down: 34,
  neutral: 54,
};

const progressColors: Record<StatCardProps['direction'], string> = {
  up: '#16a34a',
  down: '#e11d48',
  neutral: '#64748b',
};

export default function StatCard({
  label,
  value,
  change,
  direction,
  helperText,
  compact = false,
}: StatCardProps) {
  return (
    <Card
      elevation={0}
      className="h-full rounded-2xl border border-slate-200 bg-white"
      sx={{ boxShadow: 'none' }}
    >
      <CardContent className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium text-slate-500">{label}</div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
          </div>
          <div className={`rounded-full px-2.5 py-1 text-xs font-semibold ${trendStyles[direction]}`}>
            {change}
          </div>
        </div>

        {helperText ? <div className="mt-3 text-sm text-slate-500">{helperText}</div> : null}

        <LinearProgress
          variant="determinate"
          value={progressValues[direction]}
          className="mt-4 h-1.5 rounded-full bg-slate-100"
          sx={{
            '& .MuiLinearProgress-bar': {
              borderRadius: '999px',
              backgroundColor: progressColors[direction],
            },
          }}
        />
      </CardContent>
    </Card>
  );
}