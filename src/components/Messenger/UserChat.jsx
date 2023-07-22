import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';
import InputMessage from './InputMessage';

export default function UserChat() {
  return (
    <Box>
      <Box borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
        <Text fontSize='xs' fontWeight='bold' color='neutral.black'>
          User chat
        </Text>
        <Box h='70vh' pt={5}>
          <Box>
            <Box></Box>

            <LeftMessage />
            <RightMessage />

            <Box>
              <InputMessage />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
