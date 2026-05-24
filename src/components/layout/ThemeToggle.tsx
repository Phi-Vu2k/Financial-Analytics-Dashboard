import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, Tooltip } from '@mui/material'

export type ColorMode = 'light' | 'dark'

export interface ThemeToggleProps {
  mode: ColorMode
  onToggle: () => void
}

function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  const nextModeLabel = mode === 'light' ? 'dark' : 'light'

  return (
    <Tooltip title={`Switch to ${nextModeLabel} mode`}>
      <IconButton
        aria-label={`Switch to ${nextModeLabel} mode`}
        color="inherit"
        onClick={onToggle}
        size="large"
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle