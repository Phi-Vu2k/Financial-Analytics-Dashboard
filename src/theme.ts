import { alpha, createTheme } from '@mui/material/styles';

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

const borderColor = 'var(--app-border)';
const surface = 'var(--app-surface)';
const surfaceMuted = 'var(--app-surface-muted)';
const textPrimary = 'var(--app-text-primary)';
const textSecondary = 'var(--app-text-secondary)';
const primary = 'var(--app-primary)';
const primaryContrast = 'var(--app-primary-contrast)';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f766e',
    },
    success: {
      main: '#15803d',
    },
    warning: {
      main: '#b45309',
    },
    error: {
      main: '#b91c1c',
    },
    info: {
      main: '#0369a1',
    },
    background: {
      default: 'var(--app-background)',
      paper: surface,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    divider: borderColor,
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily,
    fontSize: 14,
    h1: {
      fontFamily,
      fontWeight: 700,
      letterSpacing: -0.04,
    },
    h2: {
      fontFamily,
      fontWeight: 700,
      letterSpacing: -0.035,
    },
    h3: {
      fontFamily,
      fontWeight: 700,
      letterSpacing: -0.03,
    },
    h4: {
      fontFamily,
      fontWeight: 700,
      letterSpacing: -0.025,
    },
    h5: {
      fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily,
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0,
    },
  },
  shadows: [
    'none',
    '0 1px 2px rgba(15, 23, 42, 0.06)',
    '0 4px 10px rgba(15, 23, 42, 0.08)',
    '0 8px 20px rgba(15, 23, 42, 0.08)',
    '0 12px 28px rgba(15, 23, 42, 0.08)',
    '0 18px 40px rgba(15, 23, 42, 0.10)',
    '0 24px 56px rgba(15, 23, 42, 0.12)',
    '0 32px 72px rgba(15, 23, 42, 0.14)',
    '0 40px 84px rgba(15, 23, 42, 0.16)',
    '0 48px 96px rgba(15, 23, 42, 0.18)',
    '0 56px 108px rgba(15, 23, 42, 0.20)',
    '0 64px 120px rgba(15, 23, 42, 0.22)',
    '0 72px 132px rgba(15, 23, 42, 0.24)',
    '0 80px 144px rgba(15, 23, 42, 0.26)',
    '0 88px 156px rgba(15, 23, 42, 0.28)',
    '0 96px 168px rgba(15, 23, 42, 0.30)',
    '0 104px 180px rgba(15, 23, 42, 0.32)',
    '0 112px 192px rgba(15, 23, 42, 0.34)',
    '0 120px 204px rgba(15, 23, 42, 0.36)',
    '0 128px 216px rgba(15, 23, 42, 0.38)',
    '0 136px 228px rgba(15, 23, 42, 0.40)',
    '0 144px 240px rgba(15, 23, 42, 0.42)',
    '0 152px 252px rgba(15, 23, 42, 0.44)',
    '0 160px 264px rgba(15, 23, 42, 0.46)',
    '0 168px 276px rgba(15, 23, 42, 0.48)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--app-background)',
          color: textPrimary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${borderColor}`,
          boxShadow: 'var(--app-shadow-md)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${borderColor}`,
          boxShadow: 'var(--app-shadow-md)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: 'none',
          paddingInline: '16px',
          paddingBlock: '10px',
        },
        outlined: {
          borderColor,
          backgroundColor: surface,
          '&:hover': {
            backgroundColor: surfaceMuted,
            borderColor,
          },
        },
        text: {
          '&:hover': {
            backgroundColor: alpha('#1d4ed8', 0.08),
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: primary,
            color: primaryContrast,
            '&:hover': {
              backgroundColor: '#1944bf',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '999px',
          fontWeight: 600,
          borderColor,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: surface,
          color: textPrimary,
          boxShadow: 'none',
          borderBottom: `1px solid ${borderColor}`,
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: surface,
          backgroundImage: 'none',
          borderRight: `1px solid ${borderColor}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
          marginInline: '8px',
          marginBlock: '2px',
          '&.Mui-selected': {
            backgroundColor: 'var(--app-primary-soft)',
            color: textPrimary,
            '&:hover': {
              backgroundColor: 'var(--app-primary-soft)',
            },
          },
          '&:hover': {
            backgroundColor: surfaceMuted,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${borderColor}`,
          padding: '16px 20px',
        },
        head: {
          backgroundColor: surfaceMuted,
          color: textPrimary,
          fontWeight: 700,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '14px',
          backgroundColor: surfaceMuted,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--app-text-muted)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: primary,
            boxShadow: '0 0 0 4px var(--app-focus-ring)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 44,
        },
        indicator: {
          borderRadius: 999,
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 44,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export const dashboardTheme = theme;
export const createDashboardTheme = () => theme;

export default theme;