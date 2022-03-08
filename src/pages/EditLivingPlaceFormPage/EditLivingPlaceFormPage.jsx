import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditLivingPlaceForm from "../../components/EditLivingPlaceForm/EditLivingPlaceForm";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

function EditLivingPlaceFormPage() {
  const { id } = useParams();
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            <EditLivingPlaceForm id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditLivingPlaceFormPage;
