import { Box, Container } from '@mui/material'
import { useState } from 'react'
import Layout from './Layout'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export default App
