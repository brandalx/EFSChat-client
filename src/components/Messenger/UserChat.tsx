import { Box, StackDivider, Divider, Text, Avatar } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';
import { io } from 'socket.io-client';

import InputMessageUser from './InputMessageUser';

const UserChat: React.FC = ({ userInfo }) => {
  const [dialogue, setDialogue] = useState([
    {
      type: 'left',
      time: new Date('2023-08-31T09:00:00Z').toISOString(),
      content: 'Hey, how have you been?',
      nickname: 'Alice'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:02:00Z').toISOString(),
      content: 'I’ve been doing well, thanks! How about you?',
      nickname: userInfo
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:03:00Z').toISOString(),
      content: 'I’ve been good! Just been busy with work.',
      nickname: 'Alice'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:05:00Z').toISOString(),
      content: 'Same here. The projects are piling up!',
      nickname: userInfo
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:06:00Z').toISOString(),
      content: 'We should catch up over coffee sometime.',
      nickname: 'Alice'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:08:00Z').toISOString(),
      content: 'Definitely! How about next week?',
      nickname: userInfo
    },
    {
      type: 'left',
      time: new Date('2023-08-31T09:09:00Z').toISOString(),
      content: 'Sounds perfect! Let’s set a date.',
      nickname: 'Alice'
    },
    {
      type: 'right',
      time: new Date('2023-08-31T09:10:00Z').toISOString(),
      content: 'Great, looking forward to it!',
      nickname: userInfo
    }
  ]);
  const handleNewMessage = (newMessage) => {
    setDialogue((prevDialogue) => [...prevDialogue, newMessage]);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dialogue]);

  const socketRef = useRef(null);
  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');

    setActiveChatId('test');
    if (activeChatId) {
      socketRef.current.emit('joinRoom', activeChatId);
    }
    socketRef.current.on('receiveMessage', (data) => {
      console.log('Received message:', data.message);
      setDialogue((prevMessages) => [...prevMessages, data.message]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [activeChatId]);

  return (
    <Box mb={4}>
      <Box borderRadius='16px' borderWidth='1px' py='10px'>
        <Box py={2} ms={2} display='flex' justifyContent='center' alignItems='center'>
          <Avatar size='sm' name={userInfo != null && userInfo} me={2} />
          <Text textAlign='center' fontSize='xs' fontWeight='bold' color='neutral.black'>
            {userInfo != null && userInfo}
          </Text>
        </Box>

        <Divider />
        <Box px='10px' overflow='auto' height='68vh' pt={5}>
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

            <Box>
              <div ref={messagesEndRef} />
            </Box>
          </Box>
        </Box>
        <InputMessageUser
          socketRef={socketRef}
          userInfo={userInfo != null && userInfo}
          dialogue={dialogue}
          onNewMessage={handleNewMessage}
        />
      </Box>
    </Box>
  );
};

export default UserChat;
