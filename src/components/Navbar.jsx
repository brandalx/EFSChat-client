import React from 'react';
import { Box, Container, chakra } from '@chakra-ui/react';
import theme from '../utils/theme';
export default function Navbar() {
  return (
    <Box>
      <Container maxW='1400px'>
        <Box mt='10px' borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <chakra.header w='full' py={4}>
            <Box color='primary.default'>navbar</Box>
          </chakra.header>
        </Box>
      </Container>
    </Box>
  );
}
