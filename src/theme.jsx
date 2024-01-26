import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
})

export { darkTheme, lightTheme }
