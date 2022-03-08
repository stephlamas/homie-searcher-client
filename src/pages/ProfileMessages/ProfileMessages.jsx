import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import profileService from "../../services/profile.service";
import "./ProfileMessages.css"

function ProfileMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      profileService
        .getMessages()
        .then((response) => setMessages(response.data));
    }, 2000);

    return () =>  {
      clearInterval(intervalID);
    }
  }, [])

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            {messages.map((message, i) => {
              return (
                <>
                  <Card>
                    <Card.Body>
                      <p className="name" key={i}>
                        {message.name}
                      </p>
                      <p className="phone" key={i}>
                        {message.phone}
                      </p>
                      <p key={i}>{message.message}</p>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileMessages;
