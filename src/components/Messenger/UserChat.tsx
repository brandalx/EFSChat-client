import { Box, StackDivider, Divider, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

import InputMessageUser from './InputMessageUser';

const UserChat: React.FC = ({ userInfo }) => {
  return (
    <Box mb={4}>
      <Box borderRadius='16px' borderWidth='1px' py='10px'>
        <Box py={2} ms={2} display='flex' justifyContent='center' alignItems='center'>
          <Avatar size='sm' name='John' me={2} />
          <Text textAlign='center' fontSize='xs' fontWeight='bold' color='neutral.black'>
            {userInfo != null && userInfo}
          </Text>
        </Box>

        <Divider />
        <Box px='10px' overflow='auto' height='68vh' pt={5}>
          <Box display='flex' flexDir='column' justifyContent='space-between' h='100%'>
            <Box></Box>
            <Box mx={4}>
              <LeftMessage time={Date.now()} message={'cccc'} />
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

export default UserChat;
