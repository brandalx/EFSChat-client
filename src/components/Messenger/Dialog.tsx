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
        <Box alignItems='center' display='flex'>
          <Avatar size='sm' name={data.nickname} />
          <Box mx={2}>
            <Text fontWeight='bold' fontSize='2xs' color='neutral.grayDark'>
              {data.nickname.length > 30 ? data.nickname.substring(0, 30) + '...' : data.nickname}
            </Text>
            <Text fontWeight='regular' fontSize='3xs' color='neutral.gray'>
              {data.lastmessage.length > 30 ? data.lastmessage.substring(0, 30) + '...' : data.lastmessage}
            </Text>
          </Box>
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
