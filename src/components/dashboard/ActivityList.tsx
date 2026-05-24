import { Card, CardContent, Chip, List, ListItem, ListItemText } from '@mui/material';
import type { ActivityListProps } from '../../types/dashboard';

const statusColors: Record<ActivityListProps['items'][number]['status'], 'success' | 'warning' | 'info' | 'default'> = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  neutral: 'default',
};

export default function ActivityList({ items, title = 'Recent activity' }: ActivityListProps) {
  return (
    <Card elevation={0} className="h-full rounded-2xl border border-slate-200 bg-white" sx={{ boxShadow: 'none' }}>
      <CardContent className="p-5">
        <div className="mb-4">
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-500">Latest actions across your workspace</div>
        </div>

        <List disablePadding className="space-y-3">
          {items.map((item) => (
            <ListItem
              key={item.id}
              disableGutters
              className="items-start rounded-2xl border border-slate-100 px-4 py-3"
              secondaryAction={
                <Chip
                  label={item.timestamp}
                  size="small"
                  variant="outlined"
                  color={statusColors[item.status]}
                  className="ml-4"
                />
              }
            >
              <ListItemText
                primary={<span className="text-sm font-semibold text-slate-900">{item.title}</span>}
                secondary={<span className="text-sm text-slate-500">{item.description}</span>}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}