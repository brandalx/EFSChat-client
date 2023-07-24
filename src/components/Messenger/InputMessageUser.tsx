import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const InputMessageUser: React.FC = () => {
  return (
    <Box px='10px'>
      <Box>
        <InputGroup size='md'>
          <Input
            borderRadius='100px'
            fontSize='3xs'
            _placeholder={{ fontSize: '3xs' }}
            placeholder='Type your message...'
          />
          <InputRightElement>
            <Button
              borderRadius='100px'
              size='2xs'
              me={2}
              color='white'
              _hover={{ bg: 'primary.light', color: 'primary.default' }}
              bg='primary.default'
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
