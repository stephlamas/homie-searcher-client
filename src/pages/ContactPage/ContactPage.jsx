import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ContactPage.css"

function ContactPage() {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center mt-5 mb-6">
          <h5>Contact Homie</h5>
          <p>
            Before contacting us, please consult our
            <a href="/contact"> FAQ section</a> (you can save time and money).
          </p>
          <span className="personalized mb-3">Personalized attention:</span>
          <p>
            {" "}
            Call us at 912333444 Monday to Friday from 9:00 a.m. to 18:00 p.m.
          </p>

          <p>
            {" "}
            Weekends and holidays from 10:00 to 18:00 If your call has to do
            with an advertisement that you have placed, call us from the contact
            telephone number that you indicated in it.{" "}
            <p>
              In this way we can access the data of your ad and help you as
              quickly as possible You can also send us a message here{" "}
              <span className="email">info@homie.com</span>.
            </p>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default ContactPage;
