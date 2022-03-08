import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [signupForm, setSignupForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .signup(signupForm)
      .then(({ data }) => {
        navigate("/profile");
      })
      .catch((err) =>
        console.log("OJO QUE AQUI VAN LOS ERRORES, MENDRUGO", err)
      );
  }

  return (
    <Form onSubmit={handleSubmit} className="signup-form">
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3 w-100">
            {/* <Form.Label>Firstname</Form.Label> */}
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={signupForm.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3 w-100">
            {/* <Form.Label>Lastname</Form.Label> */}
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={signupForm.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group className="mb-3 w-100">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={signupForm.email}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={12}>
          <Form.Group className="mb-3 w-100">
            {/* <Form.Label>Phone</Form.Label> */}
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              value={signupForm.phone}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>

        <Col md={12}>
          <Form.Group className="mb-3 w-100">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              placeholder="Password"
              type="password"
              name="password"
              value={signupForm.password}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Signup
      </Button>
      <div className="w-100 separator d-flex align-items-center justify-content-center text-center mt-5">
        <hr className="w-100" />
        <p className="w-100 pt-2 text-muted px-2">Or login with</p>
        <hr className="w-100" />
      </div>

      <div className="d-flex w-100">
        <button type="submit" className="btn btn-danger w-100 mt-4 me-3">
          Google+
        </button>
        <button type="submit" className="btn btn-secondary w-100 mt-4">
          Github
        </button>
      </div>
      <p className="text-center mt-3 fs-5">
        Already have an account?
        <a className="text-decoration-none fw-bold ms-1" href="/login">
          Login
        </a>
      </p>
    </Form>
  );
}

export default SignupForm;
