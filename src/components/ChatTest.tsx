// import React, { useState } from 'react';
// import { Card, Button, Radio } from 'antd';

// const ChatTest = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);

//   const questions = [
//     {
//       question: 'What is the capital of France?',
//       answers: [
//         { text: 'Paris', isCorrect: true },
//         { text: 'London', isCorrect: false },
//         { text: 'Berlin', isCorrect: false },
//       ],
//     },
//     {
//       question: 'What is the largest country in the world?',
//       answers: [
//         { text: 'Russia', isCorrect: true },
//         { text: 'China', isCorrect: false },
//         { text: 'USA', isCorrect: false },
//       ],
//     },
//     {
//       question: 'What is the currency of Japan?',
//       answers: [
//         { text: 'Yen', isCorrect: true },
//         { text: 'Dollar', isCorrect: false },
//         { text: 'Euro', isCorrect: false },
//       ],
//     },
//   ];

//   const handleAnswerSelect = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     if (selectedAnswer && selectedAnswer.isCorrect) {
//       setScore(score + 1);
//     }

//     setSelectedAnswer(null);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const renderQuestion = () => {
//     const { question, answers } = questions[currentQuestion];

//     return (
//       <>
//         <h2>{question}</h2>
//         <Radio.Group onChange={(e) => handleAnswerSelect(e.target.value)}>
//           {answers.map((answer, index) => (
//             <Radio key={index} value={answer}>
//               {answer.text}
//             </Radio>
//           ))}
//         </Radio.Group>
//         <Button type="primary" onClick={handleNextQuestion}>
//           Next
//         </Button>
//       </>
//     );
//   };

//   const renderResult = () => {
//     return (
//       <>
//         <h2>Your score: {score}</h2>
//         <Button type="primary" onClick={() => window.location.reload()}>
//           Play again
//         </Button>
//       </>
//     );
//   };

//   return (
//     <Card title="Quiz">
//       {currentQuestion < questions.length ? renderQuestion() : renderResult()}
//     </Card>
//   );
// };

// export default ChatTest;