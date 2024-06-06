import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { Box, View } from 'native-base';
import { Link } from 'expo-router';
import moment from 'moment';

const ExamRules = ({Enroll, TotalDuration}:{Enroll:boolean, TotalDuration:number}) => {

  return (
    <Box style={styles.container}>
     {
        Enroll
        ? <Link style={styles.link}
          href={{
            pathname: '/ExamScreen/',
            params: { TotalDuration: TotalDuration,}
          }}
        >
        <Text style={styles.linkText}>Enroll</Text>
      </Link> : <View style={styles.link}><Text style={[styles.linkText, {textAlign:'center'}]}>Enroll</Text></View>
     }
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    marginBottom: 20,
  },
  link: {
    backgroundColor: '#F19A1A',
    textAlign: 'center',
    padding: 12,
    borderRadius: 10,
    width: '70%',
    alignSelf: 'center',
  },
  linkText: {
    backgroundColor: '#F19A1A',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default ExamRules;
