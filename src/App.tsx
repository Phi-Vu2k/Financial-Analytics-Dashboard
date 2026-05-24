import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import AdminLayout from './components/layout/AdminLayout'
import DashboardPage from './pages/DashboardPage'
import NotificationsPage from './pages/NotificationsPage'
import TableListPage from './pages/TableListPage'
import UpgradePage from './pages/UpgradePage'
import UserProfilePage from './pages/UserProfilePage'
import type { ColorMode } from './components/layout/ThemeToggle'

const colorModeStorageKey = 'financial-dashboard-color-mode'

const paletteTokens = {
  light: {
    background: '#f4f7fb',
    surface: '#ffffff',
    surfaceMuted: '#eef3f9',
    border: '#d9e2ef',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    primary: '#1d4ed8',
    primarySoft: '#dbeafe',
    primaryContrast: '#ffffff',
  },
  dark: {
    background: '#0b1220',
    surface: '#111827',
    surfaceMuted: '#162031',
    border: '#243244',
    textPrimary: '#e5eefb',
    textSecondary: '#b2c0d6',
    primary: '#7aa2ff',
    primarySoft: 'rgba(122, 162, 255, 0.16)',
    primaryContrast: '#08111f',
  },
} as const

function getInitialColorMode(): ColorMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedMode = window.localStorage.getItem(colorModeStorageKey)
  if (storedMode === 'light' || storedMode === 'dark') {
    return storedMode
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode)

  useEffect(() => {
    window.localStorage.setItem(colorModeStorageKey, colorMode)
    document.documentElement.dataset.theme = colorMode
  }, [colorMode])

  const theme = useMemo(() => {
    const tokens = paletteTokens[colorMode]

    return createTheme({
      palette: {
        mode: colorMode,
        primary: {
          main: tokens.primary,
          contrastText: tokens.primaryContrast,
        },
        secondary: {
          main: colorMode === 'light' ? '#0f766e' : '#2dd4bf',
        },
        background: {
          default: tokens.background,
          paper: tokens.surface,
        },
        text: {
          primary: tokens.textPrimary,
          secondary: tokens.textSecondary,
        },
        divider: tokens.border,
      },
      shape: {
        borderRadius: 16,
      },
      typography: {
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      },
    })
  }, [colorMode])

  const handleToggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/admin/dashboard" />} />
          <Route
            path="/admin"
            element={
              <AdminLayout
                colorMode={colorMode}
                onToggleColorMode={handleToggleColorMode}
              />
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="user-profile" element={<UserProfilePage />} />
            <Route path="table-list" element={<TableListPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="upgrade" element={<UpgradePage />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/admin/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
