import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CloseButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
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
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import UserChat from './Messenger/UserChat';
import GroupChat from './Messenger/GroupChat';
import Menu from './Messenger/Menu';
import MenuLogo from '../assets/svg/MenuLogo';
import { userContext } from '../Context/globalContext';
const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState<string>('left');
  const [isInMessenger, setIsInMessenger] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.startsWith('/messenger')) {
      setIsInMessenger(true);
    } else {
      setIsInMessenger(false);
    }
  }, [location.pathname]);
  const { userInfo, setUserInfo } = useContext(userContext);
  const params = useParams();
  const mdMediaQuery = window.matchMedia('(min-width: 48em)');

  useEffect(() => {
    const handleResize = () => {
      if (mdMediaQuery.matches && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mdMediaQuery, isOpen, onClose]);

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
                {isInMessenger && (
                  <Box display={{ base: 'block', lg: 'none' }}>
                    <Button colorScheme='blue' onClick={onOpen}>
                      <MenuLogo />
                    </Button>
                    <Drawer size={{ base: 'full', sm: 'xl' }} placement={placement} onClose={onClose} isOpen={isOpen}>
                      <DrawerOverlay />
                      <DrawerContent>
                        <Box display='flex' alignItems='center'>
                          <Container maxW='1400px'>
                            <Box h='100%'>
                              <DrawerCloseButton mt={6} color='primary.default' />
                            </Box>

                            <DrawerHeader>Menu</DrawerHeader>
                          </Container>
                        </Box>
                        <DrawerBody>
                          <Grid templateColumns={{ base: 'repeat(1fr)', lg: '1fr 2fr 3fr' }} gap={2}>
                            <GridItem w='100%' display={{ base: 'block', lg: 'none' }}>
                              <Menu onopened={onOpen} onclosed={onClose} />
                            </GridItem>
                            <GridItem w='100%' display={{ base: 'block', lg: 'none' }}>
                              <Dialogs onclosed={onClose} />
                            </GridItem>
                            <GridItem w='100%'>
                              <Routes>
                                <Route path='/user/:id' element={<UserChat userInfo={userInfo} />} />
                                <Route path='/group/:id' element={<GroupChat userInfo={userInfo} />} />
                              </Routes>
                            </GridItem>
                          </Grid>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </Box>
                )}
              </Box>
            </Box>
          </chakra.header>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
