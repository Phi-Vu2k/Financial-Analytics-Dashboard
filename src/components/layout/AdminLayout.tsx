import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import type { ColorMode } from './ThemeToggle'

interface AdminLayoutProps {
  colorMode: ColorMode
  onToggleColorMode: () => void
}

const drawerWidth = 280

function AdminLayout({ colorMode, onToggleColorMode }: AdminLayoutProps) {
  const theme = useTheme()
  const location = useLocation()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isDesktop) {
      setMobileOpen(false)
    }
  }, [isDesktop])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Topbar
        drawerWidth={drawerWidth}
        mode={colorMode}
        onMenuClick={() => setMobileOpen(true)}
        onToggleColorMode={onToggleColorMode}
      />

      <Sidebar drawerWidth={drawerWidth} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          minHeight: '100vh',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default AdminLayout