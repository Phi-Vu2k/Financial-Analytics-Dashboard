import { Box, Link, Stack, Typography } from '@mui/material'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: 'divider',
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        mt: 'auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        sx={{
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Typography color="text.secondary" variant="body2">
          © {year} Financial Analytics Dashboard
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Built with React, MUI, and React Router
        </Typography>
        <Link color="inherit" href="/admin/dashboard" underline="hover" variant="body2">
          Dashboard
        </Link>
      </Stack>
    </Box>
  )
}

export default Footer