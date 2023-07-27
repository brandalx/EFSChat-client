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

import { Route, Routes, useParams } from 'react-router-dom';
import GroupChat from '../components/Messenger/GroupChat';
import UserChat from '../components/Messenger/UserChat';
import { userContext } from '../Context/globalContext';
import TemplateClean from '../components/Messenger/TemplateClean';
const Messenger: React.FC = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const params = useParams();

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
                <Route path='/user/:id' element={<UserChat userInfo={userInfo} />} />
                <Route path='/group/:id' element={<GroupChat userInfo={userInfo} />} />
                <Route path='/user' element={<TemplateClean data={'Select chat or begin a new one'} />} />
                <Route path='/group' element={<TemplateClean data={'Select group or begin a new one'} />} />
              </Routes>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Messenger;
