import { PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const renderTheme = (mode: PaletteMode) => {
  return createTheme({
    spacing: 4,
    palette: { mode: mode, primary: { main: '#6610f2' } },
    typography: { fontFamily: 'Roboto, Arial, san-serif' },
    components: {
      MuiButton: { defaultProps: { disableElevation: true } },
      MuiInputLabel: { styleOverrides: { asterisk: { color: 'red' } } },
    },
  })
}

export const Theme = {
  LIGHT: renderTheme('light'),
}
