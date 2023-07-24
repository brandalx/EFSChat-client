import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Dialogs: React.FC = () => {
  return (
    <Box>
      <Box>
        <Box borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Text fontSize='xs' fontWeight='bold' color='neutral.black'>
            Dialogs
          </Text>
          <Box pt={5}>
            <Text fontWeight='regular' placeholder='+1(217) 555-0113' fontSize='3xs' color='neutral.grayDark'>
              Content
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dialogs;
