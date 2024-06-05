import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Center } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface AssignmentProps {
  assignment:
  {
    id: number;
    title: string;
    finished: boolean;
    details: string;
    instructor: string;
    deadline: string;
  }
}

const Assignment = ({ assignment }: AssignmentProps) => {
  const onPressHandler = () => {
    console.log('Pressed');
  };

  return (
    !assignment.finished ? (
      <Link
        href={{
          pathname: '/(student)/AssignmentScreen/AssignmentSubmition',
          params: { assignmentTitle: assignment.title, assignmentDetails: assignment.details, instructor: assignment.instructor, deadline: assignment.deadline},
        }}
        asChild
      >
        <Pressable onPress={onPressHandler}>
          <Center
            h="100"
            bg="#F6F6F6"
            rounded="xl"
            shadow={0}
            style={styles.container}
          >
            <View style={styles.icon}>
              <AntDesign name="filetext1" size={40} color="#F19A1A" />
            </View>
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={styles.assignmentNumber}>{assignment.title}</Text>
                <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between', alignItems:'center', height:20}}>
                  <View ><Text style={styles.deadline}>Deadline: {assignment.deadline}</Text></View>
                  <View style={styles.daysLeftContainer}>
                    <Text style={[styles.daysLeft, { backgroundColor: '#ED7633' }]}>
                      1 more day
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Center>
        </Pressable>
      </Link>
    ) : (
      <Center
        h="100"
        bg="#F6F6F6"
        rounded="xl"
        shadow={0}
        style={styles.container}
      >
        <View style={styles.icon}>
          <AntDesign name="filetext1" size={45} color="#F19A1A" />
        </View>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.assignmentNumber}>{assignment.title}</Text>
            <Text style={styles.deadline}>Deadline: {assignment.deadline}</Text>
          </View>
        </View>
      </Center>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1.9,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  assignmentNumber: {
    fontWeight: '500',
    marginBottom: 5,
  },
  deadline: {
    color: 'gray',
    fontSize: 10,
  },
  daysLeftContainer: {
    padding: 20,
  },
  daysLeft: {
    borderRadius: 10,
    color: 'white',
    width: 90,
    textAlign: 'center',
    padding: 2,
    height: 25,
    alignItems: 'center',
    // marginTop: 20,
  },
});

export default Assignment;
