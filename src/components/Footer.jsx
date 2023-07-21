import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import theme from '../utils/theme';
export default function Footer() {
  return (
    <footer className='page-header'>
      <Container maxW='1400px'>
        <Box mb='10px' borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Box color='primary.default'>Footer</Box>
        </Box>
      </Container>
    </footer>
  );
}

{
  /* <footer className='page-header' style={{ background: theme.colors.neutral.black }}> */
}
