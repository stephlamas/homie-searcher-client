import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

import "./LoginPage.css";

function LoginPage() {
  return (
    <Container fluid className="login-page">
      <Row>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <LoginForm />
        </Col>
        <Col md={7}>
          <img className="w-100" src="/images/chairs3.jpg" alt="login" />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
