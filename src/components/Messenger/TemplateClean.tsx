import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TemplateClean: React.FC = ({ data }) => {
  return (
    <Box>
      <Box borderRadius='16px' borderWidth='1px' py='10px'>
        <Box py={2} ms={2} display='flex' justifyContent='center' alignItems='center'>
          <Text textAlign='center' fontSize='2xs' fontWeight='normal' color='neutral.gray'>
            {data}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TemplateClean;
