import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';
import RightCorner from '../../assets/svg/RightCorner';
import useTime from '../../hooks/useTime';
interface RightMessageProps {
  message: string;
  time: number;
}

const RightMessage: React.FC = () => {
  //   function formatTime(date) {
  //     const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  //     return new Date(date).toLocaleTimeString('en-US', options);
  //   }

  const formatTime = useTime();

  return (
    <Box justifyContent='flex-end' display='flex' alignItems='center'>
      <Box my={2} w='fit-content'>
        <Box
          w='fit-content'
          transition='all 0.3s'
          borderRadius='16px'
          py={2}
          px={4}
          bg='primary.default'
          color='white'
          borderWidth='1px'
          borderColor='primary.light'
        >
          <Box display='flex' color='white' alignItems='center' w='100%' justifyContent='flex-end'>
            <Text fontWeight='regular' fontSize='2xs'>
              Right message
            </Text>
          </Box>
        </Box>
        <Box display='flex' justifyContent='flex-end' color='primary.default' transform='translateY(-16px)'>
          <RightCorner />
        </Box>

        <Box transform='translateY(-16px)' ms={2}>
          <Text color='neutral.grayLight' fontWeight='regular' fontSize='3xs'>
            {formatTime(Date.now())}
          </Text>
        </Box>
      </Box>
      <Box>
        <Avatar ms={2} size='sm' name='Brandon Nolan' me={2} />
      </Box>
    </Box>
  );
};

export default RightMessage;
