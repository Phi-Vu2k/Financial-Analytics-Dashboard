export type TrendDirection = 'up' | 'down' | 'neutral';

export interface StatItem {
  label: string;
  value: string;
  change: string;
  direction: TrendDirection;
  helperText?: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'info' | 'neutral';
}

export interface UserRow {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'Pending' | 'Suspended';
  progress: number;
  lastLogin: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  category: 'security' | 'system' | 'billing' | 'product';
  unread: boolean;
}

export interface SettingValues {
  fullName: string;
  email: string;
  company: string;
  location: string;
  timezone: string;
  bio: string;
  emailNotifications: boolean;
  productUpdates: boolean;
  twoFactorAuth: boolean;
}

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface UpgradePlan {
  name: string;
  price: string;
  period: string;
  description: string;
  featured?: boolean;
  features: PlanFeature[];
}

export interface StatCardProps extends StatItem {
  compact?: boolean;
}

export interface RevenueChartProps {
  data: RevenuePoint[];
  title?: string;
  subtitle?: string;
}

export interface ActivityListProps {
  items: ActivityItem[];
  title?: string;
}

export interface UsersTableProps {
  rows: UserRow[];
  title?: string;
}

export interface SettingsFormProps {
  initialValues?: SettingValues;
  onSubmit?: (values: SettingValues) => void;
}

export interface UpgradePlanCardProps {
  plan: UpgradePlan;
  onChoose?: (planName: string) => void;
}