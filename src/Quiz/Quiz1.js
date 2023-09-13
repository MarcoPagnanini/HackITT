import SendQuiz from "./sendQuiz";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from 'react';
import { Layout, Space } from 'antd';

function Quiz1(props) {
  let string = "{...}";

  const handleQuizResult = (result) => {
    console.log('Risultato del quiz:', result);
  };
  return (
    <>
  
      <SendQuiz uid={props.uid} result="10" name="Quiz 1" points="100" onQuizResult={handleQuizResult}/>
    </>
  );
}

export default Quiz1;
