import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizDetailsComponent from '../(components)/QuizDetailsComponent';
import ExamRules from '../(components)/ExamRules';
import { Box, Flex } from 'native-base';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { quizDetails } from '../(components)/quizDetails';

const index = () => {

  const Details = quizDetails[0];
  const Enroll = Details.enroll;
  const TotalDuration = Details.totalDuration;

  const navigation = useNavigation();
  const params = useLocalSearchParams<{ examName: string }>();
  const { examName } = params;
  useEffect(() => {
    navigation.setOptions({ title: examName });
  }, [examName]);
  return (
    <View style={styles.container}>
        <QuizDetailsComponent Details={Details} />
        <ExamRules Enroll={Enroll} TotalDuration={TotalDuration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
});

export default index;
