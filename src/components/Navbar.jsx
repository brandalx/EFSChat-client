import React from 'react';
import { Box, Container, Text, chakra } from '@chakra-ui/react';
import theme from '../utils/theme';
import Logo from '../assets/svg/Logo';
export default function Navbar() {
  return (
    <Box>
      <Container maxW='1400px'>
        <Box mt='10px' borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <chakra.header w='full' py={4}>
            <Box color='primary.default'>
              <Box display='flex' alignItems='center'>
                {' '}
                <Logo />{' '}
                <Text ms={2} fontSize='xs' fontWeight='bold' color='primary.default'>
                  EFS Chat
                </Text>
              </Box>
            </Box>
          </chakra.header>
        </Box>
      </Container>
    </Box>
  );
}
