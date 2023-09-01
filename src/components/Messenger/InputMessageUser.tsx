import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  dialogue: any[];
  onNewMessage: (message: any) => void;
  userInfo: string;
}

const InputMessageUser: React.FC<Props> = ({ dialogue, userInfo, onNewMessage }) => {
  const [newMessage, setNewMessage] = useState<string>('');
  let inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    const messageContent = inputRef.current?.value || '';
    setNewMessage(messageContent);

    const messageBody = {
      type: 'right',
      time: new Date().toISOString(),
      content: messageContent,
      nickname: userInfo
    };

    onNewMessage(messageBody);

    // Resetting the input value using ref
    if (inputRef != null) {
      inputRef.current.value = '';
    }

    // Resetting the controlled state
    setNewMessage('');
  };

  return (
    <Box px='10px'>
      <Box>
        <InputGroup size='md'>
          <Input
            ref={inputRef}
            borderRadius='100px'
            fontSize='3xs'
            _placeholder={{ fontSize: '3xs' }}
            placeholder='Type your message...'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <InputRightElement>
            <Button
              borderRadius='100px'
              size='2xs'
              me={2}
              color='white'
              _hover={{ bg: 'primary.light', color: 'primary.default' }}
              bg='primary.default'
              onClick={sendMessage}
            >
              <Icon as={FaChevronRight} boxSize={4} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default InputMessageUser;
