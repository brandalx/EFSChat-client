import React from 'react';
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  IconButton,
  MenuIcon,
  Text,
  chakra,
  useDisclosure
} from '@chakra-ui/react';
import theme from '../utils/theme';
import Logo from '../assets/svg/Logo';
import Dialogs from './Messenger/Dialogs';
import { Link, Route, Routes } from 'react-router-dom';
import UserChat from './Messenger/UserChat';
import GroupChat from './Messenger/GroupChat';
import Menu from './Messenger/Menu';
const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState<string>('left');

  return (
    <Box>
      <Container maxW='1400px'>
        <Box mt='10px' borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <chakra.header w='full' py={4}>
            <Box color='primary.default' display='flex' justifyContent='space-between'>
              <Link to='/'>
                <Box
                  transition='all 0.3s'
                  borderRadius='16px'
                  px={2}
                  _hover={{ bg: 'primary.light', transition: 'all 0.3s' }}
                  display='flex'
                  alignItems='center'
                >
                  {' '}
                  <Logo />{' '}
                  <Text ms={2} fontSize='xs' fontWeight='bold' color='primary.default'>
                    EFS Chat
                  </Text>
                </Box>
              </Link>
              <Box display={{ base: 'block', lg: 'none' }}>
                <Button colorScheme='blue' onClick={onOpen}>
                  Open
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                      <Grid templateColumns={{ base: 'repeat(1fr)', lg: '1fr 2fr 3fr' }} gap={2}>
                        <GridItem w='100%' display={{ base: 'block', lg: 'none' }}>
                          <Menu />
                        </GridItem>
                        <GridItem w='100%' display={{ base: 'block', lg: 'none' }}>
                          <Dialogs />
                        </GridItem>
                        <GridItem w='100%'>
                          <Routes>
                            <Route path='/' element={<UserChat />} />
                            <Route path='/group' element={<GroupChat />} />
                          </Routes>
                        </GridItem>
                      </Grid>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </Box>
          </chakra.header>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
