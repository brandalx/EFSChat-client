import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Login from '../components/Home/Login';

const Home: React.FC = () => {
  return (
    <Box>
      <Container maxW='1400px'>
        <Box>
          <Box h='80vh' display='flex' flexDir='column' justifyContent='space-between'>
            <Box></Box>
            <Box>
              <Login />
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Home;
