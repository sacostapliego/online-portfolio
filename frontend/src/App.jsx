import { Box, useColorModeValue} from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"

import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import About from './pages/About'


function App() {
  return (
    <>
      <Box bg={useColorModeValue("#64b5f6","#161b33")} minH={'container.sm'} minW={'container.sm'} >
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </>
  )
};

export default App
