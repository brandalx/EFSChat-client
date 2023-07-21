import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Group from '../../assets/svg/Group';
import User from '../../assets/svg/User';

export default function Menu() {
  return (
    <Box>
      <Box>
        <Box borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Text fontSize='xs' fontWeight='bold' color='neutral.black'>
            Menu
          </Text>
          <Box pt={5}>
            <Box
              transition='all 0.3s'
              my={2}
              borderRadius='16px'
              py={2}
              bg='primary.default'
              color='white'
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
            <Box
              transition='all 0.3s'
              my={2}
              borderRadius='16px'
              py={2}
              bg='primary.default'
              color='white'
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
                  Group chat
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
