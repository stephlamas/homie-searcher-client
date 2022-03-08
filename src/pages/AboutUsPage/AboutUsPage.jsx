import React from "react";
import {  Container, Row } from "react-bootstrap";


function AboutUsPage() {
  return (
    <>
      <Container>
        <Row>
          <h5 className="privacyPolicy">
            These are the ideas at the core of Homie:
          </h5>
          <p>
            <ul>
              <li>Our community is based on connection and belonging.</li>
              <li>
                Our creativity allows us to imagine new possibilities for
                people.
              </li>
              <li>Our responsibility is to all of our stakeholders.</li>
            </ul>
          </p>
          <p>
            In the end, they all share a common thread — a fundamental belief
            that people are good and we’re in this together.
          </p>

          <p>
            <a href="/contact">Contact</a> us for further information.
          </p>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsPage;
