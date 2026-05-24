import { useMemo, useState, type FormEvent } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import type { SettingValues, SettingsFormProps } from '../../types/dashboard';

const timezones = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Singapore',
];

export default function SettingsForm({ initialValues, onSubmit }: SettingsFormProps) {
  const defaultValues = useMemo<SettingValues>(
    () =>
      initialValues ?? {
        fullName: '',
        email: '',
        company: '',
        location: '',
        timezone: 'America/New_York',
        bio: '',
        emailNotifications: true,
        productUpdates: false,
        twoFactorAuth: true,
      },
    [initialValues],
  );

  const [values, setValues] = useState<SettingValues>(defaultValues);

  const handleChange = <K extends keyof SettingValues>(key: K, value: SettingValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(values);
  };

  return (
    <Card elevation={0} className="rounded-2xl border border-slate-200 bg-white" sx={{ boxShadow: 'none' }}>
      <CardContent className="p-5">
        <div className="mb-4">
          <div className="text-lg font-semibold text-slate-900">Account settings</div>
          <div className="mt-1 text-sm text-slate-500">Update your profile and communication preferences</div>
        </div>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <div className="grid gap-4 md:grid-cols-2">
              <TextField
                label="Full name"
                value={values.fullName}
                onChange={(event) => handleChange('fullName', event.target.value)}
                fullWidth
              />
              <TextField
                label="Email address"
                type="email"
                value={values.email}
                onChange={(event) => handleChange('email', event.target.value)}
                fullWidth
              />
              <TextField
                label="Company"
                value={values.company}
                onChange={(event) => handleChange('company', event.target.value)}
                fullWidth
              />
              <TextField
                label="Location"
                value={values.location}
                onChange={(event) => handleChange('location', event.target.value)}
                fullWidth
              />
            </div>

            <TextField
              select
              label="Timezone"
              value={values.timezone}
              onChange={(event) => handleChange('timezone', event.target.value)}
              fullWidth
            >
              {timezones.map((timezone) => (
                <MenuItem key={timezone} value={timezone}>
                  {timezone}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Bio"
              value={values.bio}
              onChange={(event) => handleChange('bio', event.target.value)}
              fullWidth
              multiline
              minRows={4}
            />

            <div className="grid gap-3 rounded-2xl border border-slate-100 p-4 md:grid-cols-3">
              <FormControlLabel
                control={
                  <Switch
                    checked={values.emailNotifications}
                    onChange={(event) => handleChange('emailNotifications', event.target.checked)}
                  />
                }
                label="Email notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={values.productUpdates}
                    onChange={(event) => handleChange('productUpdates', event.target.checked)}
                  />
                }
                label="Product updates"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.twoFactorAuth}
                    onChange={(event) => handleChange('twoFactorAuth', event.target.checked)}
                  />
                }
                label="Two-factor authentication"
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" variant="contained" className="rounded-full px-6 py-2.5 normal-case shadow-none">
                Save changes
              </Button>
            </div>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}