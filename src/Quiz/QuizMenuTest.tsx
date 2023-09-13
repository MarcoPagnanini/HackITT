import React from "react";
import { useState } from "react";
import { Row, Col, Card, Button } from "antd";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DownloadOutlined } from "@ant-design/icons";
import SendQuiz from "./sendQuiz";
import { Carousel } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Quiz1 from "./Quiz1";
import { Container } from "@mui/material";
const { Header, Content, Footer } = Layout;

{
  /* <Button type="primary" shape="round" icon={<DownloadOutlined />} size={"large"} href="http://2.115.95.134:8289/~quintaa2223/Pagnanini_backup/HackITT/Quiz1.zip">
 Download
</Button> */
}
{
  /* // pulsante per inviare le notifiche */
}
{
  /* <SendQuiz result="10" name="Quiz 1" points={points === 0 ? "100" : points} /> */
}

const QuizPage = (props) => {
  const [points, setPoints] = useState<number>(0);
  const [Quiz, setQuiz] = useState<number>(0);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "900px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#283958",
  };

  function setNameQuiz(key: number) {
    console.log(key);
    setQuiz(key);
  }

  function onChange(currentSlide: any) {
    console.log(currentSlide);
  }

  return (
    <>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Quiz ${key}`,
              onClick: () => {
                setNameQuiz(key);
              },
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          {Quiz === 1 ? (
            <Quiz1 uid={props.uid} result="10" name="Quiz 1" points="100" />
          ) : null}
          {Quiz === 2 ? "OK" + Quiz : null}
          {Quiz === 3 ? "OK" + Quiz : null}
          {Quiz === 4 ? "OK" + Quiz : null}
          {Quiz === 5 ? "OK" + Quiz : null}
          {Quiz === 6 ? "OK" + Quiz : null}
          {Quiz === 7 ? "OK" + Quiz : null}
          {Quiz === 8 ? "OK" + Quiz : null}
          {Quiz === 9 ? "OK" + Quiz : null}
          {Quiz === 10 ? "OK" + Quiz : null}
          {Quiz === 11 ? "OK" + Quiz : null}
          {Quiz === 12 ? "OK" + Quiz : null}
          {Quiz === 13 ? "OK" + Quiz : null}
          {Quiz === 14 ? "OK" + Quiz : null}
          {Quiz === 15 ? "OK" + Quiz : null}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        HackITT ©2023 Created by Pagnanini Marco && Lunerti Tommaso
      </Footer>
    </>
  );

  // return (

  // );
};

export default QuizPage;
