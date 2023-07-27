import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';
import Main from './components/Main';
import Home from './pages/Home';
import Messenger from './pages/Messenger';
import Page404 from './pages/page404';
import { globalContext, userContext } from './Context/globalContext';
const AppRoutes: React.FC = () => {
  const [globalInfo, setGlobalInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <globalContext.Provider value={{ globalInfo, setGlobalInfo }}>
        <userContext.Provider value={{ userInfo, setUserInfo }}>
          <Box>
            <BrowserRouter>
              <div className='wrapper'>
                <Routes>
                  <Route path='/*' element={<Header />} />
                </Routes>
                <Main>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/messenger/*' element={<Messenger />} />
                    <Route path='/*' element={<Page404 />} />
                  </Routes>
                </Main>
                <Routes>
                  <Route path='/*' element={<Footer />} />
                </Routes>
              </div>
            </BrowserRouter>
          </Box>
        </userContext.Provider>
      </globalContext.Provider>
    </>
  );
};

export default AppRoutes;
