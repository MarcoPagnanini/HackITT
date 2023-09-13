import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./index.css";
import {
  LineChartOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import SingOut from "./SingOut";
import Meta from "antd/es/card/Meta";
import Classify from "./Classify.js";
const { Header, Content, Sider } = Layout;

const List = ["Classifica", "Timer"];

const items1: MenuProps["items"] = List.map((key) => ({
  key,
  label: ` ${key}`,
}));

const App: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [chooseQuiz, setChooseQuiz] = useState("Quiz 1");

  const rows = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 80 },
    { name: "Player 3", score: 60 },
    { name: "Player 4", score: 40 },
    { name: "Player 5", score: 20 },
  ];

  const items2: MenuProps["items"] = [
    LineChartOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
    CheckCircleOutlined,
  ].map((icon, index) => {
    const key = String(index);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: key === "0" ? `Podium` : `Quiz ${key}`,
      onClick: () => {
        if (key === "Quiz 0") setChooseQuiz("Podium");
        else setChooseQuiz(`Quiz ${key}`);
        console.log(chooseQuiz);
      },
    };
  });

  useEffect(() => {
    db.collection("Risposte")
      .orderBy("createdAt","desc")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc: any[]) => doc.data()));
      });
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <SingOut />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {chooseQuiz === "Quiz 0" ? <>{<Classify />}</> : null}

            {messages.map(
              ({ id, value, photoURL, uid, author, TypeQuiz, Punteggio }) => (
                <>
                  {chooseQuiz === "Quiz 0" ? null : (
                    <>
                      {TypeQuiz === chooseQuiz && (
                        <div key={id}>
                          <img src={photoURL} alt={value} />
                          <p>{author}</p>
                          <p>{"->" + Punteggio}</p>
                        </div>
                      )}
                    </>
                  )}
                </>
              )
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
