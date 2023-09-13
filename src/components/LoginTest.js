import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import SignIn from "./SignIn";
import logomontani from "../img/logomontani.png";
import logo from "../img/logo-color.png";
const LoginTest = () => {
  return (
    <>
      <Row style={{ height: "90vh" }}>
        <Col span={12} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          >
            <div>
            <img src={logo}></img><h1>Login</h1>
            </div>
            <Form>
              <Form.Item label="Nome">
                <Input placeholder="Inserisci il tuo nome" />
              </Form.Item>
              <Form.Item label="Email">
                <Input placeholder="Inserisci la tua email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Invia
                </Button>
              </Form.Item>
              <Form.Item>
                <SignIn />
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col
          span={12}
          style={{
            backgroundImage: `url(${logomontani})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "#fff", fontSize: "3rem" }}>HackITT Cup</h1>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginTest;
