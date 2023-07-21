import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';
import Main from './components/Main';
import Home from './pages/Home';
export default function AppRoutes() {
  return (
    <Box>
      <BrowserRouter>
        <div className='wrapper'>
          <Routes>
            <Route path='/*' element={<Header />} />
          </Routes>
          <Main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Main>
          <Routes>
            <Route path='/*' element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Box>
  );
}
