import React from 'react';
import { Box } from '@chakra-ui/react';
import theme from '../utils/theme';
export default function Footer() {
  return (
    <footer className='page-header' style={{ background: theme.colors.neutral.black }}>
      <Box color='primary.default'>Footer</Box>
    </footer>
  );
}
