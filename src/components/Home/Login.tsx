import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [name, setName] = React.useState<string>('');

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const onSubForm = (_bodyData: object) => {
    console.log(_bodyData);
    navigate('/messenger');
  };
  const isValid = () => name.length > 5;
  return (
    <Box>
      <Container maxW='350px'>
        <Box w='100%' data-aos='fade-up'>
          <Box>
            <Box>
              <Text fontSize='2xl' fontWeight='bold' color='neutral.black'>
                Enter Chat
              </Text>
              <Text fontSize='2xs' color='neutral.grayDark'>
                Enter your name and join EFC Chat
              </Text>
            </Box>
            <Box mt='30px'>
              <form onSubmit={handleSubmit(onSubForm)}>
                <Stack spacing={4}></Stack>
                <FormControl id='name' isInvalid={!!errors.name}>
                  <FormLabel fontWeight='semibold' fontSize='3xs' color='neutral.grayDark'>
                    Name
                  </FormLabel>
                  <Input
                    id='name'
                    {...register('name', {
                      required: { value: true, message: 'This field is required' },
                      minLength: { value: 6, message: 'Minimum length should be 6' }
                    })}
                    type='name'
                    background='neutral.white'
                    _placeholder={{ color: 'neutral.gray' }}
                    borderRadius='8px'
                    fontSize='2xs'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormErrorMessage p={0} mt={2} fontSize='3xs'>
                    {errors.name && typeof errors.name === 'string' && errors.name}
                  </FormErrorMessage>
                </FormControl>

                <Stack spacing={8}>
                  <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                    {/* <Flex alignItems='center'>
                            <Checkbox mr='2'>
                              <Text color='neutral.black' fontSize='2xs'>
                                Keep me logged in
                              </Text>
                            </Checkbox>
                          </Flex> */}
                  </Stack>

                  <Button
                    isDisabled={!isValid()}
                    type='submit'
                    w='100%'
                    background='primary.default'
                    fontWeight='bold'
                    variant='solid'
                    color='neutral.white'
                    borderWidth='1px'
                    borderColor='neutral.white'
                    _hover={{
                      background: 'neutral.white',
                      color: 'primary.default',
                      borderWidth: '1px',
                      borderColor: 'primary.default'
                    }}
                    py={5}
                  >
                    Continue
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;