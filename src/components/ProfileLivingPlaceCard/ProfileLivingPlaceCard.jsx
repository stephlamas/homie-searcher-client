import { React, useState } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import homieService from "../../services/homie.service";
import "./ProfileLivingPlaceCard.css";

function ProfileLivingPlaceCard({ place }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const deletePlace = () => {
    homieService.deleteLivingPlace(place._id).then(() => {
      console.log("borrado");
    });
  };

  return (
    <>
      <Link to={`/living-places/${place._id}`}>
        <Card className="profile-living-place-card">
          <Card.Header>
            <Carousel
              activeIndex={index}
              interval={null}
              onSelect={handleSelect}
            >
              {place.images.map((image) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-muted mb-1">
              {place.location.city}, {place.location.province}
            </Card.Text>
            <Card.Title className="text-dark fs-6 fw-bold">
              {place.title}
            </Card.Title>
            <Card.Text className="text-dark">€{place.price} / Month</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={6}>
                <Link to={`/profile/living-places/${place._id}/edit`}>
                  <Button variant="warning" className="w-100">
                    edit
                  </Button>
                </Link>
              </Col>
              <Col md={6}>
                <Button
                  variant="danger"
                  className="w-100"
                  onClick={deletePlace}
                >
                  delete
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
}

export default ProfileLivingPlaceCard;
