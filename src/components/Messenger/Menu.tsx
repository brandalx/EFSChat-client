import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import Group from '../../assets/svg/Group';
import User from '../../assets/svg/User';
import { Link, useLocation } from 'react-router-dom';

const Menu: React.FC = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemSelected = useCallback((itemId: number) => {
    setSelectedItem(itemId);
  }, []);

  function normalizePath(path: string) {
    return path.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  }

  useEffect(() => {
    const normalizedPath = normalizePath(location.pathname);
    if (normalizedPath === '/messenger/user') {
      handleItemSelected(1);
    } else if (normalizedPath === '/messenger/group') {
      handleItemSelected(2);
    }
  }, [location.pathname, handleItemSelected]);

  const bgColor = useColorModeValue('neutral.white', 'neutral.grayDark');
  const color = useColorModeValue('neutral.grayDark', 'neutral.white');

  return (
    <Box>
      <Box>
        <Box borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Text fontSize='xs' fontWeight='bold' color='neutral.black'>
            Menu
          </Text>
          <Box pt={5}>
            <Link to='/messenger/user'>
              <Box
                transition='all 0.3s'
                my={2}
                borderRadius='16px'
                py={2}
                bg={selectedItem === 1 ? 'primary.default' : bgColor}
                color={selectedItem === 1 ? 'white' : color}
                borderWidth='1px'
                borderColor='primary.light'
                _hover={{
                  bg: 'primary.light',
                  color: 'neutral.grayDark',
                  borderWidth: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <Box ps={2} display='flex' alignItems='center'>
                  <User />
                  <Text ms={2} fontWeight='regular' fontSize='2xs'>
                    User chat
                  </Text>
                </Box>
              </Box>
            </Link>
            <Link to='/messenger/group'>
              <Box
                transition='all 0.3s'
                my={2}
                borderRadius='16px'
                py={2}
                bg={selectedItem === 2 ? 'primary.default' : bgColor}
                color={selectedItem === 2 ? 'white' : color}
                borderWidth='1px'
                borderColor='primary.light'
                _hover={{
                  bg: 'primary.light',
                  color: 'neutral.grayDark',
                  borderWidth: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <Box ps={2} display='flex' alignItems='center'>
                  <Group />
                  <Text ms={2} fontWeight='regular' fontSize='2xs'>
                    Group chat
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Menu;
