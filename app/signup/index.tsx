import { Box, Button, Input, ScrollView, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import axios from 'axios';
import { GestureResponderEvent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../(student)/(components)/Header';

interface FormValues {
  email: string;
  academicId: string;
  displayName: string;
  arabicName: string;
  gender: string;
  hashedPassowrd: string;
  departmentName: string;
  group: string;
  role: string;
}

const Index = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    academicId: '',
    displayName: '',
    arabicName: '',
    gender: '',
    hashedPassowrd: '',
    departmentName: '',
    group: '',
    role: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://15.157.61.53:8085/auth/register',
        formValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API Response:', response.data);
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
                  type="text"
                  mx="3"
                  placeholder="id@o6u.edu.eg"
                  w="100%"
                  accessibilityLabel="Label for Email"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  academicID
                </Text>
                <Input
                  onChangeText={(value) => handleChange('academicId', value)}
                  value={formValues.academicId}
                  type="text"
                  mx="3"
                  placeholder="academicId"
                  w="100%"
                  accessibilityLabel="Label for academicId"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  displayName
                </Text>
                <Input
                  onChangeText={(value) => handleChange('displayName', value)}
                  value={formValues.displayName}
                  type="text"
                  mx="3"
                  placeholder="displayName"
                  w="100%"
                  accessibilityLabel="Label for displayName"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  arabicName
                </Text>
                <Input
                  onChangeText={(value) => handleChange('arabicName', value)}
                  value={formValues.arabicName}
                  type="text"
                  mx="3"
                  placeholder="arabicName"
                  w="100%"
                  accessibilityLabel="Label for arabicName"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  gender
                </Text>
                <Input
                  onChangeText={(value) => handleChange('gender', value)}
                  value={formValues.gender}
                  type="text"
                  mx="3"
                  placeholder="gender"
                  w="100%"
                  accessibilityLabel="Label for gender"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  hashedPassword
                </Text>
                <Input
                  onChangeText={(value) =>
                    handleChange('hashedPassowrd', value)
                  }
                  value={formValues.hashedPassowrd}
                  type="password"
                  mx="3"
                  placeholder="hashedPassowrd"
                  w="100%"
                  accessibilityLabel="Label for hashedPassowrd"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  departmentName
                </Text>
                <Input
                  onChangeText={(value) =>
                    handleChange('departmentName', value)
                  }
                  value={formValues.departmentName}
                  type="text"
                  mx="3"
                  placeholder="departmentName"
                  w="100%"
                  accessibilityLabel="Label for departmentName"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  group
                </Text>
                <Input
                  onChangeText={(value) => handleChange('group', value)}
                  value={formValues.group}
                  type="text"
                  mx="3"
                  placeholder="group"
                  w="100%"
                  accessibilityLabel="Label for group"
                />
              </Box>

              <Box>
                <Text ml={'0.9rem'} color={'#999999'}>
                  role
                </Text>
                <Input
                  onChangeText={(value) => handleChange('role', value)}
                  value={formValues.role}
                  type="text"
                  mx="3"
                  placeholder="role"
                  w="100%"
                  accessibilityLabel="Label for role"
                />
              </Box>

              <Box w={'100%'}>
                <Button
                  backgroundColor={'#F19A1A'}
                  mt={5}
                  onPress={handleSubmit}
                >
                  <Text color={'white'}>Submit</Text>
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Index;
