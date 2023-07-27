import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Dialog from './Dialog';
import { useLocation } from 'react-router-dom';

const Dialogs: React.FC = () => {
  const testArr: any[] = [
    {
      _id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      _dialogId: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      _dialogType: 'chat',
      nickname: 'kmksefokv2',
      lastmessage: 'Will be cool bro',
      lastmessageTime: '1690452253804'
    },
    {
      _id: '19a4c7e1-94d1-4a13-9e22-8fb38e2a0f92',
      _dialogId: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
      _dialogType: 'chat',
      nickname: 'dssdfdf',
      lastmessage: 'Where are you',
      lastmessageTime: '1690452314705'
    },
    {
      _id: '1e73ff89-3f44-42b3-9d4f-810a6a1089d3',
      _dialogId: '53a05d8b-55d3-48d3-9a07-80f66db72732',
      _dialogType: 'group',
      nickname: 'user123',
      lastmessage: 'Hey there! How have you been? Its been a while since we last chatted. Lets catch up soon!',
      lastmessageTime: '1690452593841'
    },
    {
      _id: 'c16a71a0-281d-473e-a882-7a99e7c4249e',
      _dialogId: 'e6a7b0d8-9b57-418a-8f10-4ad6b25f871c',
      _dialogType: 'group',
      nickname: 'chatlover',
      lastmessage:
        'I just finished reading this amazing book, and I thought you might enjoy it too. It has a captivating storyline and intriguing characters!',
      lastmessageTime: '1690452675902'
    }
  ];
  const location = useLocation();
  return (
    <Box>
      <Box>
        <Box borderRadius='16px' borderWidth='1px' py='20px' px='10px'>
          <Text fontSize='xs' fontWeight='bold' color='neutral.black'>
            Dialogs
          </Text>
          {location.pathname === '/messenger/' && (
            <Box pt={5}>
              {testArr.map((item, index) => {
                if (item._dialogType === 'chat') {
                  return <Dialog key={index} data={item} />;
                }
              })}
            </Box>
          )}

          {location.pathname === '/messenger/group' && (
            <Box pt={5}>
              {testArr.map((item, index) => {
                if (item._dialogType === 'group') {
                  return <Dialog key={index} data={item} />;
                }
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dialogs;
