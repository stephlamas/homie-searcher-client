import React from "react";
import NewLivingPlaceForm from "../../components/NewLivingPlaceForm/NewLivingPlaceForm";
import { Container, Row, Col } from "react-bootstrap";
import "./NewLivingPlaceFormPage"
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

function NewLivingPlaceFormPage() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            <NewLivingPlaceForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewLivingPlaceFormPage;
