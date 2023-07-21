import { ChakraProvider } from '@chakra-ui/provider';
import React, { useEffect, useState } from 'react';

import theme from './utils/theme';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}
