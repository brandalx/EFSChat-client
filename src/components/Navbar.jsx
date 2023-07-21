import React from 'react';
import { Box, Container, chakra } from '@chakra-ui/react';
import theme from '../utils/theme';
export default function Navbar() {
  return (
    <Box>
      {/* <Container maxW='1110px'> */}
      <chakra.header w='full' py={4}>
        <Box color='primary.default'>navbar</Box>
      </chakra.header>
      {/* </Container> */}
    </Box>
  );
}
