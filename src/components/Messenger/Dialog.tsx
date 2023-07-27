import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';
import useTime from '../../hooks/useTime';

const Dialog: React.FC = ({ data }) => {
  const formatTime = useTime();
  return (
    <Box
      cursor='pointer'
      borderWidth='1px'
      py={2}
      my={1}
      px={4}
      transition='all 0.3s'
      _hover={{ borderColor: 'white', bg: 'primary.light', transition: 'all 0.3s' }}
      borderRadius='100px'
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box>
          <Avatar size='sm' name={data.nickname} />
        </Box>
        <Box>
          <Text fontWeight='regular' fontSize='3xs' color='neutral.grayDark'>
            {data.lastmessage.substring(0, 25)}
          </Text>
        </Box>
        <Box>
          <Text color='neutral.grayLight' fontWeight='regular' fontSize='3xs'>
            {formatTime(Number(data.lastmessageTime))}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Dialog;
