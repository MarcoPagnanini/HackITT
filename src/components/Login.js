import React from "react";
import { Row, Col, Form, Input, Button} from "antd";
import "./LoginWithImage.css"; 
import SingIn from './SignIn';



import logomontani from "../img/logomontani.png";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form name="login" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const LoginWithImage = () => {
//   return (
//     <div className="login-wrapper">
//       <Row gutter={[16, 16]}>
//         <Col xs={24} md={12} className="login-image">
//           <div className="login-image-inner">
//             <img src={logomontani} alt="Image" />
//           </div>
//         </Col>
//         <Col xs={24} md={12} className="login-form">
//           <div className="login-form-inner">
//             <h1>Login</h1>
//             <LoginForm />
//             <SingIn />
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
    return(
        <div className="login-wrapper">
            
        </div>
    );
};

export default LoginWithImage;
