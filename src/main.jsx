import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import App from './App'
import './index.css'
import ToggleColorMode from './contexts/ColorMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleColorMode>
      <CssBaseline />
      <App />
    </ToggleColorMode>
  </React.StrictMode>
)
