import { quizDetailsTyped } from './type';

export const quizDetails: quizDetailsTyped[] = [
  {
    quizId: 1,
    studentId: 1,
    moduleId: 1,
    enroll: true,
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    instructorName: 'Dr. Smith',
    totalDuration: 60,
    totalScore: 100,
    submission: {
      finalGrade: 90,
      takenTime: 50,
      status: 'submitted',
      submitAt: '10:50 AM',
    }
  },
];
