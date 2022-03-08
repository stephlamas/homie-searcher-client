import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/auth.context";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .login(loginForm)
      .then(({ data }) => {
        //console.log("JWT token", data.authToken)
        storeToken(data.authToken);
        authenticateUser();
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit} className="login-form d-flex">
      <Form.Group className="mb-3 w-100">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Login
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
        Don't have an account?
        <a className="text-decoration-none fw-bold ms-1" href="/signup">
          Signup
        </a>
      </p>
    </Form>
  );
}

export default LoginForm;
