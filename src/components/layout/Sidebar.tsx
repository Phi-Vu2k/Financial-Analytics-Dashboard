import { useMemo, type ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import PersonIcon from '@mui/icons-material/Person'
import TableViewIcon from '@mui/icons-material/TableView'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'

interface SidebarProps {
  drawerWidth: number
  mobileOpen: boolean
  onClose: () => void
}

interface SidebarItem {
  label: string
  path: string
  icon: ReactElement
}

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: <DashboardCustomizeIcon /> },
  { label: 'User Profile', path: '/admin/user-profile', icon: <PersonIcon /> },
  { label: 'Table List', path: '/admin/table-list', icon: <TableViewIcon /> },
  { label: 'Notifications', path: '/admin/notifications', icon: <NotificationsActiveIcon /> },
  { label: 'Upgrade', path: '/admin/upgrade', icon: <UpgradeIcon /> },
]

function Sidebar({ drawerWidth, mobileOpen, onClose }: SidebarProps) {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const activePath = useMemo(() => location.pathname, [location.pathname])

  const handleNavigate = (path: string) => {
    navigate(path)
    onClose()
  }

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ px: 2.5, py: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack spacing={0.25}>
            <Typography sx={{ fontWeight: 700 }} variant="subtitle1">
              Financial Analytics
            </Typography>
            <Typography color="text.secondary" variant="caption">
              Admin shell
            </Typography>
          </Stack>
          <IconButton
            aria-label="Close navigation drawer"
            onClick={onClose}
            size="small"
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuOpenIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <Divider />

      <List component="nav" disablePadding sx={{ py: 1.5 }}>
        {sidebarItems.map((item) => {
          const selected = activePath === item.path

          return (
            <ListItemButton
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              selected={selected}
              sx={{
                mx: 1.5,
                mb: 0.5,
                borderRadius: 2,
                transition: 'background-color 120ms ease-in-out',
                '&.Mui-selected': {
                  backgroundColor:
                    theme.palette.mode === 'light'
                      ? 'rgba(25, 118, 210, 0.12)'
                      : 'rgba(144, 202, 249, 0.16)',
                },
                '&.Mui-selected:hover': {
                  backgroundColor:
                    theme.palette.mode === 'light'
                      ? 'rgba(25, 118, 210, 0.18)'
                      : 'rgba(144, 202, 249, 0.24)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selected ? 'primary.main' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    variant: 'body2',
                    sx: {
                      fontWeight: selected ? 700 : 500,
                    },
                  },
                }}
              />
            </ListItemButton>
          )
        })}
      </List>

      <Box sx={{ mt: 'auto', p: 2.5 }}>
        <Box
          sx={{
            borderRadius: 3,
            border: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.action.hover,
            p: 2,
          }}
        >
          <Typography gutterBottom variant="subtitle2" sx={{ fontWeight: 700 }}>
            Need more power?
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Upgrade your plan to unlock premium analytics and reporting features.
          </Typography>
        </Box>
      </Box>
    </Box>
  )

  return (
    <>
      <Drawer
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
        open={mobileOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        variant="temporary"
      >
        {content}
      </Drawer>

      <Drawer
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    </>
  )
}

export default Sidebar