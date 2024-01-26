import { createContext, useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../theme'
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ToggleColorMode
