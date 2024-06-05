import React from 'react';
import { Box, Flex, Heading, Text, VStack, View } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

import { quizDetails } from './quizDetails';
import {
  Fontisto,
  FontAwesome5,
  SimpleLineIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title:
      'You must complete this test in one session-make sure your internet is reliable.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title:
      'Cheating is not allowed, If you tried to use google or any other application during the exam, You will recieve only ONE WARNING then you will be banned from session! ',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <Box style={styles.item}>
    <Box style={styles.bullet} />
    <Text style={styles.itemText}>{title}</Text>
  </Box>
);

const Details = quizDetails;

const QuizDetailsComponent = () => {
  return (
    <View style={styles.container}>
      <VStack >
      <Box style={styles.description}>
        <Heading style={styles.heading}>Details</Heading>
      </Box>
      <Flex>
        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <Entypo name="list" size={30} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>15</Text>
            <Text style={styles.grayText}>Multiple Choice Questions</Text>
          </Flex>
        </Flex>

        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <Ionicons name="timer-sharp" size={30} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>2 mins</Text>
            <Text style={styles.grayText}>Time Duration</Text>
          </Flex>
        </Flex>

        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <Fontisto name="date" size={28} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>10:10 PM</Text>
            <Text style={styles.grayText}>Start Date</Text>
          </Flex>
        </Flex>

        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <Fontisto name="date" size={28} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>11:10 PM</Text>
            <Text style={styles.grayText}>End Date</Text>
          </Flex>
        </Flex>

        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <FontAwesome5 name="chalkboard-teacher" size={28} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>DR.Ahmed Emad</Text>
            <Text style={styles.grayText}>Instructor Name</Text>
          </Flex>
        </Flex>

        <Flex style={styles.flexContainer}>
          <Box style={styles.iconBox}>
            <SimpleLineIcons  name="badge" size={30} color="black" />
          </Box>
          <Flex style={styles.infoBox}>
            <Text style={styles.boldText}>30 mark</Text>
            <Text style={styles.grayText}>Multiple Choice Questions</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box style={styles.description}>
        <Heading style={styles.heading}>Before you start</Heading>
      </Box>
      <FlatList
        renderItem={({ item }) => <Item title={item.title} />}
        data={DATA}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.italicText}>ALL THE BEST!!</Text>
    </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  heading: {
    fontWeight: '600',
    fontSize: 22,
    marginVertical: 10,
  },
  text: {
    fontWeight: 'medium',
  },
  flexContainer: {
    marginBottom: 10,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F19A1A',
    marginHorizontal: 2,
    padding: 2,
    borderRadius: 999,
    borderColor: '#000',
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  infoBox: {
    marginLeft: 10,
  },
  boldText: {
    fontWeight: '500',
    fontSize: 20,
  },
  grayText: {
    color: 'gray',
  },
});

export default QuizDetailsComponent;
