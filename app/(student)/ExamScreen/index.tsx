import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import sampleQuestions from '../(components)/questions';
import QuestionsComponent from '../(components)/QuestionsComponent';
import { useLocalSearchParams } from 'expo-router';

const sampleQuestion = sampleQuestions;
const index = () => {
  // Navigation
  const params = useLocalSearchParams<{ TotalDuration: string }>();
  const { TotalDuration } = params;
  useEffect(() => {
    // navigation.setOptions({ title: TotalDuration });
  }, [TotalDuration]);

  // State variables
  // const [totalDuration, setTotalDuration] = useState<number>(TotalDuration); // Default duration of 10 minutes
  const [timeLeft, setTimeLeft] = useState<number>(TotalDuration * 60); // Time left in seconds
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        {/* Display time left and score */}
        <View style={styles.score}>
          <Text style={styles.scoreText}>
            {submitted
              ? 'Finished'
              : `${Math.floor(timeLeft / 60)}:${(
                  '0' +
                  (timeLeft % 60)
                ).slice(-2)}`}
          </Text>
          {/* <Text style={styles.scoreText}>
            Score: {score !== null ? `${score}/${sampleQuestion.length}` : ''}
          </Text> */}
        </View>
      </View>
      {/* Questions component section */}
      <ScrollView contentContainerStyle={styles.form}>
        <QuestionsComponent
          sampleQuestions={sampleQuestion}
          setScore={setScore}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  header: {
    paddingTop: 40,
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: '#F19A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFF',
  },
  duration: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FFF',
  },
  form: {
    flexGrow: 1,
    paddingBottom: 20,
    marginBottom: 20,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: 'white',
    width: 150,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default index;
