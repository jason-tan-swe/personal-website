import { Stack, Container } from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material'

const LayoutStyled = styled(Stack)`
  // padding-top: 56px;
  z-index: 1;
`

const Layout = ({ children }) => {
  const theme = useTheme()
  return (
    <Container
      sx={{ backgroundColor: theme.palette.background.default }}
      maxWidth="md"
    >
      <LayoutStyled id="content">{children}</LayoutStyled>
    </Container>
  )
}

export default Layout
