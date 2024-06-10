import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import Header from './(student)/(components)/Header';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { GestureResponderEvent } from 'react-native';

interface FormValues {
  email: string;
  // role: string;
  password: string;
}

const Signin = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
    // role: '',
  };

  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleChange = (name: keyof FormValues, value: string | number) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://15.157.61.53:8085/auth/login',
        formValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API Response:', response.data);
      router.replace('/Home');
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <Box>
          <Header />
          <Box>
            <VStack space={3} alignItems={'center'} padding={5}>
              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  Email
                </Text>
                <Input
                  onChangeText={(value) => handleChange('email', value)}
                  value={formValues.email}
                  mx="3"
                  placeholder="id@o6u.edu.eg"
                  w="100%"
                  accessibilityLabel="Label for Email"
                />
              </Box>
              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  Password
                </Text>
                <Input
                  onChangeText={(value) => handleChange('password', value)}
                  value={formValues.password}
                  type="password"
                  mx="3"
                  placeholder="Password"
                  w="100%"
                  accessibilityLabel="Label for Password"
                />
              </Box>
              {/* <Flex flexDirection={'row'} width={'full'}>
                <RadioButton.Group
                  onValueChange={(value) => handleChange('role', value)}
                  value={formValues.role}
                >
                  <Flex
                    width={'full'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                  >
                    <RadioButton.Item label="Professor" value="professor" />
                    <RadioButton.Item label="Student" value="student" />
                  </Flex>
                </RadioButton.Group>
              </Flex> */}

              <Box w={'100%'}>
                <Button
                  backgroundColor={'#F19A1A'}
                  mt={5}
                  onPress={handleSubmit}
                >
                  <Text color={'white'}>Sign in</Text>
                </Button>
              </Box>
              <Center>
                <Text
                  ml={'1rem'}
                  mt={2}
                  fontWeight={'bold'}
                  fontSize={'xs'}
                  color={'#767575'}
                >
                  Don't Have an account,
                  <Link href={'/signup/'}>
                    <Text color={'#F19A1A'}>Sign up</Text>
                  </Link>
                </Text>
                <Text
                  ml={'1rem'}
                  mt={2}
                  fontWeight={'bold'}
                  fontSize={'xs'}
                  color={'#767575'}
                >
                  <Link href={'/ForgetPassword/'}>Forget Password?</Link>
                </Text>
              </Center>
            </VStack>
          </Box>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Signin;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 960,
//     marginHorizontal: 'auto',
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 36,
//     color: '#38434D',
//   },
// });

{
  /* <View>
<View>
  <Text>Go to signup</Text>
  <Link
    href={'/signup'}
    style={{
      backgroundColor: 'red',
      width: '50%',
      marginHorizontal: 'auto',
    }}
  >
    Signup
  </Link>
</View>
</View> */
}
