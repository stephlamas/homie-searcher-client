import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";

import { MessageContext } from "../../context/userMessage.context";
// import { useNavigate } from "react-router-dom";
import homieService from "../../services/homie.service";

// import { AuthContext } from "../../context/auth.context";


function ContactForm({ id, owner }) {
  const { setShowMessage, setMessageInfo } = useContext(MessageContext);
  // const { user } = useContext(AuthContext);
  const [messageForm, setMessageForm] = useState({
    // owner: "",
    email: "",
    message: "",
    phone: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessageForm({
      ...messageForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    homieService
      .saveMessageLivingPlace(id, messageForm)
      .then(({ response }) => {
        setShowMessage(true);
        setMessageInfo({
          title: "Completed",
          desc: "Message sent succesfully!",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
   <>
        <Card className="p-3 mt-5">
          <Card.Header className="bg-primary">
            <p className="text-center text-white fs-2 m-0">Contact</p>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="message"
                  value={messageForm.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3 w-100">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={messageForm.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3 w-100">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={messageForm.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={messageForm.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Contact
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer>
            <div>
              <p className="text-muted">Professional advertiser</p>
              <p>
                <span className="fs-bold">Phone: </span>
                <span>{owner?.phone}</span>
              </p>
              <p>
                <span className="fs-bold">Name: </span>
                <span>
                  {owner?.firstName} {owner?.lastName}
                </span>
              </p>
            </div>
          </Card.Footer>
        </Card>
    </>
  );
}

export default ContactForm;
