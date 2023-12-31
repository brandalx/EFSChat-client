import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';
import LeftCorner from '../../assets/svg/LeftCorner';
import useTime from '../../hooks/useTime';
interface RightMessageProps {
  message: string;
  time: number;
}

const LeftMessage: React.FC = ({ message, time, nickname }) => {
  //   function formatTime(date) {
  //     const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  //     return new Date(date).toLocaleTimeString('en-US', options);
  //   }

  const formatTime = useTime();

  return (
    <Box justifyContent='flex-start' display='flex' alignItems='center'>
      <Box me={2}>
        <Avatar size='sm' name={nickname} me={2} />
      </Box>
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
              {message ? message : 'error'}
            </Text>
          </Box>
        </Box>
        <Box color='primary.light' transform='translateY(-16px)'>
          <LeftCorner />
        </Box>

        <Box transform='translateY(-16px)' ms={2}>
          <Text color='neutral.grayLight' fontWeight='regular' fontSize='3xs'>
            {/* {formatTime(Date.now())} */}
            {time ? formatTime(time) : 'undefined'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default LeftMessage;
