import React, { useContext } from 'react';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  useDisclosure
} from '@chakra-ui/react';
import Menu from '../components/Messenger/Menu';
import Dialogs from '../components/Messenger/Dialogs';
import MessengerWindow from '../components/Messenger/GroupChat';

import { Route, Routes } from 'react-router-dom';
import GroupChat from '../components/Messenger/GroupChat';
import UserChat from '../components/Messenger/UserChat';
import { userContext } from '../Context/globalContext';
const Messenger: React.FC = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  return (
    <Box>
      <Container maxW='1400px'>
        <Box>
          <Grid templateColumns={{ base: 'repeat(1fr)', lg: '1fr 2fr 3fr' }} gap={2}>
            <GridItem w='100%' display={{ base: 'none', lg: 'block' }}>
              <Menu />
            </GridItem>
            <GridItem w='100%' display={{ base: 'none', lg: 'block' }}>
              <Routes>
                <Route path='/*' element={<Dialogs />} />
              </Routes>
            </GridItem>
            <GridItem w='100%'>
              <Routes>
                <Route path='/user' element={<UserChat userInfo={userInfo} />} />
                <Route path='/group' element={<GroupChat userInfo={userInfo} />} />
              </Routes>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Messenger;
