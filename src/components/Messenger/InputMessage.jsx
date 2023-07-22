import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
export default function InputMessage() {
  return (
    <Box>
      <Box>
        <InputGroup size='md'>
          <Input fontSize='3xs' _placeholder={{ fontSize: '3xs' }} placeholder='Type your message...' />
          <InputRightElement>
            <Button
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
}
