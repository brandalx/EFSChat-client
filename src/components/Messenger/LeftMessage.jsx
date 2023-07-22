import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import LeftCorner from '../../assets/svg/LeftCorner';

export default function LeftMessage() {
  //   function formatTime(date) {
  //     const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  //     return new Date(date).toLocaleTimeString('en-US', options);
  //   }

  function formatTime(date) {
    const options = { hour12: true, hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleTimeString('en-US', options);
  }

  return (
    <Box justifyContent='flex-start' display='flex'>
      <Box my={2} w='fit-content'>
        <Box
          w='fit-content'
          transition='all 0.3s'
          borderRadius='16px'
          py={2}
          px={4}
          bg='primary.light'
          color='white'
          borderWidth='1px'
          borderColor='primary.light'
        >
          <Box display='flex' color='neutral.grayDark' alignItems='center' w='100%' justifyContent='flex-end'>
            <Text fontWeight='regular' fontSize='2xs'>
              Left message
            </Text>
          </Box>
        </Box>
        <Box color='primary.light' transform='translateY(-16px)'>
          <LeftCorner />
        </Box>

        <Box ms={2}>
          <Text color='neutral.grayLight' fontWeight='regular' fontSize='3xs'>
            {formatTime(Date.now())}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
