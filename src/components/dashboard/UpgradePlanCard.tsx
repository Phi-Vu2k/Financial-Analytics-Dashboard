import { Button, Card, CardContent, Chip, List, ListItem, ListItemText } from '@mui/material';
import type { UpgradePlanCardProps } from '../../types/dashboard';

export default function UpgradePlanCard({ plan, onChoose }: UpgradePlanCardProps) {
  const accentClasses = plan.featured
    ? 'border-blue-500 ring-1 ring-blue-200 bg-blue-50/40'
    : 'border-slate-200 bg-white';

  return (
    <Card
      elevation={0}
      className={`h-full rounded-2xl border ${accentClasses}`}
      sx={{ boxShadow: 'none' }}
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-slate-900">{plan.name}</div>
            <div className="mt-1 text-sm text-slate-500">{plan.description}</div>
          </div>
          {plan.featured ? <Chip label="Popular" size="small" color="primary" /> : null}
        </div>

        <div className="mt-5 flex items-end gap-1">
          <div className="text-4xl font-semibold tracking-tight text-slate-900">{plan.price}</div>
          <div className="pb-1 text-sm text-slate-500">{plan.period}</div>
        </div>

        <List disablePadding className="mt-5 space-y-2">
          {plan.features.map((feature) => (
            <ListItem
              key={feature.label}
              disableGutters
              className="rounded-xl border border-slate-100 px-3 py-2"
            >
              <ListItemText
                primary={<span className="text-sm font-medium text-slate-900">{feature.label}</span>}
                secondary={
                  <span className={feature.included ? 'text-emerald-600' : 'text-slate-400'}>
                    {feature.included ? 'Included' : 'Not included'}
                  </span>
                }
              />
            </ListItem>
          ))}
        </List>

        <div className="mt-5">
          <Button
            fullWidth
            variant={plan.featured ? 'contained' : 'outlined'}
            onClick={() => onChoose?.(plan.name)}
            className="rounded-full py-2.5 normal-case shadow-none"
          >
            Choose plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}