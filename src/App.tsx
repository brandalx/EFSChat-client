import { ChakraProvider } from '@chakra-ui/provider';
import React from 'react';
import theme from './utils/theme';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
