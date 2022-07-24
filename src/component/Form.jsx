import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const Form = () => {
  const [isLoading, setLoading] = useState(false);

  const [otp, setOtp] = useState('');

  return (
    <Box>
      <Heading>Form</Heading>
      <Stack gap="0.5rem">
        <Box>
          <Input type="email" />
        </Box>
        <Box>
          <Input type="password" />
        </Box>
        <Box>
          <HStack>
            <PinInput value={otp} onChange={value => setOtp(value)}>
              <PinInputField width="10px"   />
              <PinInputField width="10px"  />
              <PinInputField width="10px"  />
              <PinInputField width="10px"  />
            </PinInput>
          </HStack>
        </Box>
        <Box>
          <Text>{otp}</Text>
        </Box>
        <Box>
          <Button onClick={()=>{
           setLoading(true)
           setTimeout(()=>{
            setLoading(false)
           },2000)
          }}
          isLoading={isLoading}
          >Sign up</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;
