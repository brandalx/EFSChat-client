import { Box, StackDivider, Divider, Text, Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

import InputMessageUser from './InputMessageUser';

const GroupChat: React.FC = () => {
  const dialogue = [
    {
      type: 'left',
      time: new Date('2023-08-31T09:00:00Z').toISOString(),
      content: 'Hey everyone, how’s the project going?',
      nickname: 'Alice'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:01:00Z').toISOString(),
      content: 'I’m making good progress on my end. Thanks for asking!',
      nickname: 'MainUser'
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:02:00Z').toISOString(),
      content: 'I’ve almost finished the design mockups.',
      nickname: 'Charlie'
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:03:00Z').toISOString(),
      content: 'Ill need a couple more days for the backend.',
      nickname: 'Eve'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:04:00Z').toISOString(),
      content: 'Alright, let me know if you need any assistance.',
      nickname: 'MainUser'
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:05:00Z').toISOString(),
      content: 'Will do. Thanks!',
      nickname: 'Eve'
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:06:00Z').toISOString(),
      content: 'Everyone, lets sync up tomorrow at 3 PM.',
      nickname: 'Alice'
    }
  ];

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
            <Box>
              {dialogue.map((item, index) => {
                return (
                  <Box key={index} mx={4}>
                    {item.type === 'left' ? (
                      <Box>
                        <LeftMessage time={item.time} message={item.content} nickname={item.nickname} />
                      </Box>
                    ) : (
                      <Box>
                        <RightMessage time={item.time} message={item.content} nickname={item.nickname} />
                      </Box>
                    )}
                  </Box>
                );
              })}
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
