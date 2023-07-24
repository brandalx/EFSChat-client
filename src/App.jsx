import { ChakraProvider } from '@chakra-ui/provider';
import React, { useEffect } from 'react';
import theme from './utils/theme';
import AppRoutes from './AppRoutes';
import Aos from 'aos';

export default function App() {
  useEffect(() => {
    console.log('ok');
    Aos.init();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}
