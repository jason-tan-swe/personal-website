import { Stack, Typography, Fade, Container } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Section from './Section'

const HeaderLayout = styled(Stack)`
  align-self: center;
`
// margin: ${theme.spacing(1.5)};

const HeaderMessageContainer = styled(Container)`
  border: 1 solid;
  display: flex;
  justify-content: center;
`
// border-radius: ${theme.spacing(1.6)};
// padding: ${theme.spacing(1)};
// background-color: ${theme.palette.grey[300]};

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true)
    }

    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad, false)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  const headerIntro = 'Hey, my name is'
  const headerName = 'Jason Tan'
  const headerMessage = "I'm a Software Engineer based in Canada 🇨🇦"

  return (
    <Section id="home">
      <HeaderLayout>
        <Fade in={isLoaded} timeout={2000}>
          <Typography
            sx={{ fontWeight: 'bold' }}
            align={'center'}
            variant="subtitle1"
          >
            {headerIntro}
          </Typography>
        </Fade>
        <Container>
          <Fade in={isLoaded} timeout={5000}>
            <Typography
              sx={{ fontWeight: 'bold' }}
              weight={'bold'}
              align={'center'}
              variant="h2"
            >
              {headerName}
            </Typography>
          </Fade>
          <Fade in={isLoaded} timeout={7000}>
            <HeaderMessageContainer>
              <Typography
                // color={theme.pal}
                sx={{ fontWeight: 'bold' }}
                align={'center'}
                variant="subtitle1"
                component="p"
              >
                {headerMessage}
              </Typography>
            </HeaderMessageContainer>
          </Fade>
        </Container>
      </HeaderLayout>
    </Section>
  )
}

export default Header
