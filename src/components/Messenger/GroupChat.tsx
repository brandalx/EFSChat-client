import { Box, StackDivider, Divider, Text, Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

import InputMessageUser from './InputMessageUser';

const GroupChat: React.FC = () => {
  return (
    <Box mb={4}>
      <Box borderRadius='16px' borderWidth='1px' py='10px'>
        <Box py={2} ms={2} display='flex' justifyContent='center' alignItems='center'>
          <AvatarGroup me={2} size='sm' max={2}>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </AvatarGroup>
          <Text textAlign='center' fontSize='xs' fontWeight='bold' color='neutral.black'>
            Work
          </Text>
        </Box>

        <Divider />
        <Box px='10px' overflow='scroll' height='68vh' pt={5}>
          <Box display='flex' flexDir='column' justifyContent='space-between' h='100%'>
            <Box></Box>
            <Box mx={4}>
              <LeftMessage />
              <RightMessage />
              <LeftMessage />
              <RightMessage />
              <LeftMessage />
              <RightMessage />
              <LeftMessage />
              <RightMessage />
              <LeftMessage />
              <RightMessage />
              <LeftMessage />
              <RightMessage />
            </Box>

            <Box></Box>
          </Box>
        </Box>
        <InputMessageUser />
      </Box>
    </Box>
  );
};

export default GroupChat;
