import '@fontsource-variable/source-code-pro'

import styled from '@emotion/styled'
import {
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  useMediaQuery,
  Link,
  Button,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ColorModeContext } from '../contexts/ColorMode'
import { useContext, useState } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'

const NavbarStyled = styled(Box)`
  width: 100%;
  position: fixed;
  padding: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;
`
// background-color: ${theme.palette.background.paper};

const Logo = styled(Typography)`
  font-family: 'Source Code Pro Variable';
  font-weight: bold;
`

const NavLayout = styled(Box)`
  display: flex;
  justify-content: ${props =>
    props?.ismobile === 'true' ? 'space-between' : 'space-around'};
`

const NavLink = styled(Button)`
  padding-top: 0;
  padding-bottom: 0;
  text-transform: none;
  margin-top: 0.05rem;
  &:hover {
    background-color: transparent;
  }
`
// color: ${theme.palette.text.primary};

const Navbar = () => {
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const colorMode = useContext(ColorModeContext)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const onMenuOpen = e => {
    setMenuAnchor(e.currentTarget)
    setIsMenuOpen(Boolean(e.currentTarget))
  }
  const onMenuClose = () => {
    setMenuAnchor(null)
    setIsMenuOpen(false)
  }

  const onMenuItem = selector => {
    const e = document.getElementById(selector)
    const headerOffset = 56
    const elementPos = e.getBoundingClientRect().top
    const offsetPos = elementPos + window.scrollY - headerOffset

    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth'
    })
    onMenuClose()
  }

  return (
    <NavbarStyled>
      <NavLayout ismobile={isMobile.toString()}>
        <Logo>j.tan</Logo>
        <Box>
          {isMobile ? (
            <>
              <IconButton
                aria-controls={isMenuOpen ? 'menu-open' : undefined}
                aria-expanded={isMenuOpen ? 'true' : undefined}
                aria-label="menu"
                aria-haspopup={'true'}
                onClick={onMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <NavLink onClick={() => onMenuItem('home')}>Home</NavLink>
              <NavLink onClick={() => onMenuItem('about-me')}>About</NavLink>
              <NavLink onClick={() => onMenuItem('experience')}>
                Experience
              </NavLink>
              <NavLink onClick={() => onMenuItem('projects')}>Projects</NavLink>
              <NavLink onClick={() => onMenuItem('contact')}>Contact</NavLink>
            </>
          )}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <LightMode fontSize="small" />
            ) : (
              <DarkMode fontSize="small" />
            )}
          </IconButton>
        </Box>
        <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={onMenuClose}>
          <MenuItem onClick={() => onMenuItem('home')}>Home</MenuItem>
          <MenuItem onClick={() => onMenuItem('about-me')}>About</MenuItem>
          <MenuItem onClick={() => onMenuItem('experience')}>
            Experience
          </MenuItem>
          <MenuItem onClick={() => onMenuItem('projects')}>Projects</MenuItem>
          <MenuItem onClick={() => onMenuItem('contact')}>Contact</MenuItem>
        </Menu>
      </NavLayout>
    </NavbarStyled>
  )
}

export default Navbar
