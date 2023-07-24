import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import theme from '../utils/theme';

const Footer: React.FC = () => {
  return (
    <footer className='page-header'>
      <Container maxW='1400px'>
        <Box mb='10px' borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Box>Footer</Box>
        </Box>
      </Container>
    </footer>
  );
};

{
  /* <footer className='page-header' style={{ background: theme.colors.neutral.black }}> */
}

export default Footer;
