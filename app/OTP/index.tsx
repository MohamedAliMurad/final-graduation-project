import { Box, Button, Flex, Input, Text, View } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { GestureResponderEvent } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';

const styles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },

  codeFiledRoot: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    padding: 20,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});

const CELL_COUNT = 6;

interface FormValues {
  email: string;
  newPassword: string;
}

const EnterCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    newPassword: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://15.157.61.53:8085/auth/Reset',
        {
          otp: value,
          email: formValues.email,
          newPassword: formValues.newPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <Flex
        size={'100%'}
        alignItems={'center'}
        flexDir={'column'}
        justifyContent={'center'}
        width={'full'}
        padding={'10'}
      >
        <Text fontWeight={'bold'} fontSize={'3xl'}>
          Enter Code
        </Text>
        <Box p={4} mb={5} flexDir={'row'}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </Box>

        <Box marginY={5}>
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

        <Box mb={5}>
          <Input
            onChangeText={(value) => handleChange('newPassword', value)}
            value={formValues.newPassword}
            type="password"
            mx="3"
            placeholder="New Password"
            w="100%"
            accessibilityLabel="New Password"
          />
        </Box>

        <Button
          w={'100%'}
          backgroundColor={'#F19A1A'}
          // onPress={(e: GestureResponderEvent) => handleSubmit()}
          onPress={handleSubmit}
        >
          <Text color={'white'}>Submit</Text>
        </Button>
      </Flex>
    </SafeAreaView>
  );
};

export default EnterCode;
