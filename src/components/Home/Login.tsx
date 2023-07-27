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
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/globalContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>('');

  const { userInfo, setUserInfo } = useContext(userContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubForm = (_bodyData: object) => {
    console.log(_bodyData);
    setUserInfo(nickname);
    navigate('/messenger', { state: { nickname: nickname } });
  };

  const isValid = () => nickname.replace(/[^a-z0-9]/g, '').toLowerCase().length > 5;

  const validateInput = (input: string) => {
    console.log(nickname);
    console.log(input);

    const pattern = /[^a-z0-9]/g;
    const result = input.replace(pattern, '');

    setNickname(result.toLowerCase());
  };
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
                Enter your nickname and join EFC Chat <br />
              </Text>
              <Text color='primary.default'>As simple as that!</Text>
            </Box>
            <Box mt='30px'>
              <form onSubmit={handleSubmit(onSubForm)}>
                <Stack spacing={4}></Stack>
                <FormControl id='nickname' isInvalid={!!errors.nickname}>
                  <FormLabel fontWeight='semibold' fontSize='3xs' color='neutral.grayDark'>
                    Nickname
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='@' />
                    <Input
                      id='nickname'
                      {...register('nickname', {
                        required: { value: true, message: 'This field is required' },
                        minLength: { value: 6, message: 'Minimum length should be 6' }
                      })}
                      type='nickname'
                      background='neutral.white'
                      _placeholder={{ color: 'neutral.gray' }}
                      borderRadius='8px'
                      fontSize='2xs'
                      color='neutral.black'
                      placeholder='John Doe'
                      value={nickname}
                      onChange={(e) => validateInput(e.target.value.toLocaleLowerCase())}
                    />
                  </InputGroup>
                  <FormErrorMessage p={0} mt={2} fontSize='3xs'>
                    {errors.nickname && typeof errors.nickname === 'string' && errors.nickname}
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
