import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import ProfileLivingPlaceCard from "../../components/ProfileLivingPlaceCard/ProfileLivingPlaceCard";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import profileService from "../../services/profile.service";

function ProfileLivingPlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    profileService.getLivingPlaces().then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Nav>
          <Nav.Item className="ms-auto">
            <Nav.Link href="/profile/living-places/create">
              <Button variant="primary">Create new living place</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            <Row>
              {places.map((place) => {
                return (
                  <Col md={4} className="mb-3">
                    <ProfileLivingPlaceCard place={place} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileLivingPlaces;
