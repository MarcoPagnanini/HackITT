import { useEffect } from "react";
import SingOut from "./SingOut";
import { db, auth } from "../firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SendMessage from "./SendMessage";
import SendQuiz from "../Quiz/sendQuiz";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import FineQuizPhoto from "../img/{fin3QuizH}.png";
// import { Avatar } from "@mui/material";
import { Avatar, Space } from 'antd';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import firebase from "firebase/compat/app";
import Quiz1 from "../Quiz/QuizMenuTest.tsx";
import Admin from "./Admin.tsx";
import logo from "../img/logo-color.png";
import "firebase/firestore";
import "./chat.css";
import React, { useState } from "react";
import { AppBar } from "@mui/material";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import type { MenuProps } from 'antd'; TOGLIENDO IL COMMENTO DA COME PROBLEMA CHE QUESTI IMPORT POSSONO ESSERE USATI SOLO IN TS
import { Breadcrumb, Layout, Menu, theme } from "antd";

function Chat(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userName = auth.currentUser.displayName;
  const photoURL = auth.currentUser.photoURL;
  const [timerSecondData, setTimerSecondData] = useState("");
  const [timerSecondDataLeft, setTimerSecondDataLeft] = useState("");
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState([]);
  const [timeLeft, setTimeLeft] = useState(7200); // timer di 60 secondi
  const [contentVisible, setContentVisible] = useState(true); // contenuto visibile all'inizio
  const [buttonClicked, setButtonClicked] = useState(false); // stato del pulsante
  const [buttonClickAgain, setButtonClickAgain] = useState(false); // stato del pulsante
  const [buttonQuizStart, setButtonQuizStart] = useState(false);

  window.onbeforeunload = async function () {
    // db.collection
    console.log(timeLeft);
    await db.collection("StartQuiz").doc(props.uid).update({
      timer: timeLeft,
    });
    return "Sei sicuro di voler lasciare questa pagina?";
  };

  function getTimeSinceServerTimestampInSeconds() {
    const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();
    const seconds = (Date.now() - serverTimestamp.toMillis()) / 1000;
    return seconds.toString();
  }

  useEffect(() => {
    let timer;
    // db.collection("StartQuiz")
    //   .doc(props.uid)
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.data();
    //     const timer = data.timer;
    //     console.log(timer);
    //     if(timer != 7200)
    //     setButtonClickAgain(true);
    //   });

    if (buttonClicked) {
      timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      // db.collection("StartQuiz").doc(props.uid).update({
      //   timer: 7200,
      // });
    }
    return () => clearTimeout(timer);
  }, [timeLeft, buttonClicked]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const remainingSeconds = timeLeft % 60;

  useEffect(() => {
    if (timeLeft === 0) {
      setContentVisible(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    db.collection("StartQuiz")
      .where("uid", "==", props.uid)
      .limit(50)
      .onSnapshot((snapshot) => {});
  }, []);

  // useEffect(() => {
  //   db.collection("StartQuiz")
  //     .where("uid", "==", props.uid)
  //     .limit(50)
  //     .onSnapshot((snapshot) => {
  //       setTimerSecondData(
  //         snapshot.docs[0]._delegate?._document?.createTime?.timestamp?.seconds
  //           ? snapshot.docs[0]._delegate._document.createTime.timestamp.seconds
  //           : null
  //       );
  //       console.log(
  //         snapshot.docs[0]._delegate._document.createTime.timestamp.seconds
  //       );
  //     });
  // }, []);

  async function resetTimer() {
    setButtonClicked(true);
    setButtonQuizStart(true);
    setShow(false);

    await db.collection("StartQuiz").doc(props.uid).set({
      author: auth.currentUser.displayName,
      uid: props.uid,
      timer: timeLeft,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    await db.collection("users").doc(props.uid).set({
      author: props.name,
      uid: props.uid,
      email: props.email,
      photoURL: props.photoURL,
      punteggio: 0,
    });
    // window.location.reload();
  }

  function capitalizeName(name) {
    // Dividere la stringa in una matrice di parole separate da spazi
    let words = name.toLowerCase().split(" ");

    // Iterare attraverso ogni parola nella matrice delle parole
    for (let i = 0; i < words.length; i++) {
      // Convertire la prima lettera di ogni parola in maiuscolo
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    // Unire di nuovo le parole in una stringa e restituirla
    return words.join(" ");
  }

  return (
    <>
      {auth.currentUser.uid === "OlfIeQ1XDwdkFxW47rFJld1RA8C2" ? (
        <>
          <Admin />
          <SendMessage />
        </>
      ) : (
        <>
          {/* // Da qui Grafica */}
          <div style={{ height: "100vh"  }}>
            <Container fluid className="p-0 h-100">
              <Row style={{ height: "10%" }}>
                <Col>
                  {
                    <Navbar bg="dark" variant="dark" expand="sm">
                        <img src={logo} style={{height:"65px", margin:10}} />
                      <div className="container-navbar">
                      <Navbar.Collapse
                        key={1}
                        className="justify-content-end container-navbar"
                        id="container-navbar"
                      >
                        <Navbar.Text style={{position:"absolute", top:10, right:10}}>
                          {/* <Avatar src={photoURL} style={{height:"40px",width:"40px"}} alt={userName} /> */}
                          <Avatar src={<img src={FineQuizPhoto} style={{height:"10px",width:"40px"}}alt="avatar" />} />
                          {/* {console.log(userName)} */}
                          {/* <Avatar alt={userName}  /> */}
                          <p>{capitalizeName(userName)}</p>
                        {/* <SingOut /> */}
                        </Navbar.Text>
                      </Navbar.Collapse>
                      </div>
                    </Navbar>
                  }
                </Col>
              </Row>
              <Row style={{ height: "80%" }}>
                <Col>
                  {messages.map(({ id, text, photoURL, uid }) => (
                    <>
                      {text === "StartQuiz" ? (
                        <>
                          {contentVisible && (
                            <div>
                              {buttonClicked ? (
                                <Quiz1 uid={props.uid} />
                              ) : (
                                null
                              )}
                              {/* // bottone di partenza */}
                              {buttonQuizStart ? null : (
                                <>
                                  <Modal
                                    show={true}
                                    onHide={handleClose}
                                    centered
                                    size="lg"
                                    backdrop="static"
                                    keyboard={false}
                                  >
                                    <Modal.Header>
                                      <Modal.Title>Regole</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      1. Vietato Aggiornare la Pagina Principale<br></br>
                                      2. Vietato visionare il lavoro di altri
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        variant="primary"
                                        onClick={() => {
                                          resetTimer();
                                          // getTimeSinceServerTimestampInSeconds()
                                        }}
                                      >
                                        Avvia Il Quiz
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </>
                              )}
                            </div>
                          )}
                        </>
                      ) : null}
                    </>
                  ))}
                </Col>
              </Row>
              <Row style={{ height: "10%" }}>
                <Col className="footer">
                  {
                        <div style={{background: "#001529"}}>
                        <p className="footer">{`Timer: ${hours
                          .toString()
                          .padStart(2, "0")}:${minutes
                          .toString()
                          .padStart(2, "0")}:${remainingSeconds
                          .toString()
                          .padStart(2, "0")}`}</p>
                        {/* <SingOut></SingOut> */}
                      </div>
                  }
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Chat;
