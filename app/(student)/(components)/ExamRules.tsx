import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box } from 'native-base';
import { Link } from 'expo-router';
const ExamRules = () => {
  return (
    <Box style={styles.container}>
      <Link href={'/ExamScreen/'} style={styles.link}>
        <Text style={styles.linkText}>Enroll</Text>
      </Link>
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default ExamRules;
