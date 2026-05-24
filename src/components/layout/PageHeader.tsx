import type { ReactNode } from 'react'
import { Box, Stack, Typography } from '@mui/material'

export interface PageHeaderProps {
  title: string
  subtitle?: string
  actions?: ReactNode
}

function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <Stack
      sx={{
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
      }}
      spacing={2}
    >
      <Box>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography color="text.secondary" variant="body2">
            {subtitle}
          </Typography>
        ) : null}
      </Box>
      {actions ? <Box>{actions}</Box> : null}
    </Stack>
  )
}

export default PageHeader