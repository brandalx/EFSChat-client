import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Menu from '../components/Messenger/Menu';
import Dialogs from '../components/Messenger/Dialogs';
import MessengerWindow from '../components/Messenger/MessengerWindow';
export default function Messenger() {
  return (
    <Box>
      <Container maxW='1400px'>
        <Box>
          <Grid templateColumns='1fr 2fr 3fr' gap={2}>
            <GridItem w='100%'>
              <Menu />
            </GridItem>
            <GridItem w='100%'>
              <Dialogs />
            </GridItem>
            <GridItem w='100%'>
              <MessengerWindow />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
