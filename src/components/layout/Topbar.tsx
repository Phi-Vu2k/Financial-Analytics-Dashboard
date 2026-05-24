import { Box, AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeToggle, { type ColorMode } from './ThemeToggle'

interface TopbarProps {
  drawerWidth: number
  mode: ColorMode
  onMenuClick: () => void
  onToggleColorMode: () => void
}

function Topbar({ drawerWidth, mode, onMenuClick, onToggleColorMode }: TopbarProps) {
  return (
    <AppBar
      color="inherit"
      elevation={0}
      position="fixed"
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <IconButton
          aria-label="Open navigation drawer"
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ minWidth: 0, flexGrow: 1 }}>
          <Stack spacing={0.25}>
            <Typography component="div" noWrap variant="subtitle1" sx={{ fontWeight: 700 }}>
              Financial Analytics Dashboard
            </Typography>
            <Typography color="text.secondary" noWrap variant="caption">
              Manage your admin workspace
            </Typography>
          </Stack>
        </Box>

        <ThemeToggle mode={mode} onToggle={onToggleColorMode} />
      </Toolbar>
    </AppBar>
  )
}

export default Topbar