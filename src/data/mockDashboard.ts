import type {
  ActivityItem,
  NotificationItem,
  RevenuePoint,
  SettingValues,
  StatItem,
  UpgradePlan,
  UserRow,
} from '../types/dashboard';

export const dashboardStats: StatItem[] = [
  {
    label: 'Revenue',
    value: '$48,390',
    change: '+12.4%',
    direction: 'up',
    helperText: 'vs last month',
  },
  {
    label: 'Users',
    value: '1,284',
    change: '+8.1%',
    direction: 'up',
    helperText: 'new accounts this quarter',
  },
  {
    label: 'Conversion',
    value: '3.92%',
    change: '-0.6%',
    direction: 'down',
    helperText: 'checkout performance',
  },
  {
    label: 'Support Tickets',
    value: '24',
    change: '8 open',
    direction: 'neutral',
    helperText: 'average response 2h',
  },
];

export const revenueData: RevenuePoint[] = [
  { month: 'Jan', revenue: 18000, cost: 9800, profit: 8200 },
  { month: 'Feb', revenue: 21500, cost: 10500, profit: 11000 },
  { month: 'Mar', revenue: 20300, cost: 9900, profit: 10400 },
  { month: 'Apr', revenue: 25800, cost: 12100, profit: 13700 },
  { month: 'May', revenue: 30100, cost: 14400, profit: 15700 },
  { month: 'Jun', revenue: 28400, cost: 13300, profit: 15100 },
  { month: 'Jul', revenue: 32600, cost: 14700, profit: 17900 },
  { month: 'Aug', revenue: 34400, cost: 15500, profit: 18900 },
  { month: 'Sep', revenue: 31800, cost: 14900, profit: 16900 },
  { month: 'Oct', revenue: 35700, cost: 15800, profit: 19900 },
  { month: 'Nov', revenue: 37200, cost: 16700, profit: 20500 },
  { month: 'Dec', revenue: 38900, cost: 17300, profit: 21600 },
];

export const activityItems: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Quarterly report approved',
    description: 'The leadership team approved the latest revenue plan.',
    timestamp: '2 hours ago',
    status: 'success',
  },
  {
    id: 'act-2',
    title: 'New team member onboarded',
    description: 'A new analyst joined the finance operations squad.',
    timestamp: '5 hours ago',
    status: 'info',
  },
  {
    id: 'act-3',
    title: 'Billing alert triggered',
    description: 'One subscription payment failed and needs review.',
    timestamp: 'Yesterday',
    status: 'warning',
  },
  {
    id: 'act-4',
    title: 'Weekly backup completed',
    description: 'All environment snapshots were stored successfully.',
    timestamp: '2 days ago',
    status: 'neutral',
  },
];

export const usersTableRows: UserRow[] = [
  {
    id: 1,
    name: 'Olivia Harper',
    email: 'olivia@finanlytics.com',
    role: 'Admin',
    department: 'Finance',
    status: 'Active',
    progress: 92,
    lastLogin: '2 min ago',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'marcus@finanlytics.com',
    role: 'Analyst',
    department: 'Operations',
    status: 'Active',
    progress: 76,
    lastLogin: '14 min ago',
  },
  {
    id: 3,
    name: 'Priya Nair',
    email: 'priya@finanlytics.com',
    role: 'Manager',
    department: 'Strategy',
    status: 'Pending',
    progress: 64,
    lastLogin: '1 hour ago',
  },
  {
    id: 4,
    name: 'Ethan Cole',
    email: 'ethan@finanlytics.com',
    role: 'Support',
    department: 'Customer Success',
    status: 'Suspended',
    progress: 38,
    lastLogin: '3 days ago',
  },
  {
    id: 5,
    name: 'Sophia Patel',
    email: 'sophia@finanlytics.com',
    role: 'Designer',
    department: 'Product',
    status: 'Active',
    progress: 84,
    lastLogin: 'Today',
  },
];

export const notificationItems: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Payment succeeded',
    body: 'Your annual subscription has been renewed successfully.',
    time: '10 minutes ago',
    category: 'billing',
    unread: true,
  },
  {
    id: 'notif-2',
    title: 'Security review completed',
    body: 'A login from a new device was confirmed by two-factor authentication.',
    time: '1 hour ago',
    category: 'security',
    unread: true,
  },
  {
    id: 'notif-3',
    title: 'New feature released',
    body: 'You can now export monthly reports directly from the dashboard.',
    time: 'Yesterday',
    category: 'product',
    unread: false,
  },
  {
    id: 'notif-4',
    title: 'System maintenance scheduled',
    body: 'Planned downtime will occur on Saturday at 01:00 UTC.',
    time: '2 days ago',
    category: 'system',
    unread: false,
  },
];

export const defaultSettingsValues: SettingValues = {
  fullName: 'Avery Morgan',
  email: 'avery@finanlytics.com',
  company: 'Finanlytics',
  location: 'New York, USA',
  timezone: 'America/New_York',
  bio: 'Managing financial analytics and operations across multiple business units.',
  emailNotifications: true,
  productUpdates: true,
  twoFactorAuth: true,
};

export const upgradePlans: UpgradePlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'For solo users getting started with reporting.',
    features: [
      { label: 'Basic analytics', included: true },
      { label: 'Export CSV', included: true },
      { label: 'Team collaboration', included: false },
      { label: 'Priority support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Best for growing teams needing more visibility.',
    featured: true,
    features: [
      { label: 'Basic analytics', included: true },
      { label: 'Export CSV', included: true },
      { label: 'Team collaboration', included: true },
      { label: 'Priority support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '$49',
    period: '/month',
    description: 'Advanced controls for large organizations.',
    features: [
      { label: 'Custom dashboards', included: true },
      { label: 'Advanced permissions', included: true },
      { label: 'Dedicated success manager', included: true },
      { label: 'White-label reporting', included: true },
    ],
  },
];