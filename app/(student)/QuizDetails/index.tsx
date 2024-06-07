import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import QuizDetailsComponent from '../(components)/QuizDetailsComponent';
import ExamRules from '../(components)/ExamRules';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { quizData } from '../(components)/quizData';

const index = () => {

  
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ examName: string, ExamId: number }>();
  const { examName, ExamId } = params;
  useEffect(() => {
    navigation.setOptions({ title: examName });
    }, [examName, ExamId]);

    const exam = quizData.find((quiz) => quiz.id === ExamId);
    const Details = exam?.details;
    const Enroll = Details?.enroll;
  return (
    <View style={styles.container}>
        <QuizDetailsComponent Details={Details} />
        {
          Enroll && (
            Details.submission.status === 'Pending' && <ExamRules Enroll={Enroll} examId= {exam?.id} />
          )
        }
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
