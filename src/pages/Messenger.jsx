import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Menu from '../components/Messenger/Menu';
import Dialogs from '../components/Messenger/Dialogs';
import MessengerWindow from '../components/Messenger/GroupChat';
import { Route, Routes } from 'react-router-dom';
import GroupChat from '../components/Messenger/GroupChat';
import UserChat from '../components/Messenger/UserChat';
export default function Messenger() {
  return (
    <Box>
      <Container maxW='1400px'>
        <Box>
          <Grid templateColumns={{ base: 'repeat(1fr)', lg: '1fr 2fr 3fr' }} gap={2}>
            <GridItem w='100%'>
              <Menu />
            </GridItem>
            <GridItem w='100%'>
              <Dialogs />
            </GridItem>
            <GridItem w='100%'>
              <Routes>
                <Route path='/' element={<UserChat />} />
                <Route path='/group' element={<GroupChat />} />
              </Routes>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
