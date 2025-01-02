import { Box, useColorModeValue} from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"

import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Box bg={useColorModeValue("#64b5f6","#161b33")}>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
      </Box>
    </>
  )
};

export default App
