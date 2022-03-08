import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import homieService from "../../services/homie.service";

function LivingPlacesPage() {
  const [places, setPlaces] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    homieService.getAllLivingPlaces(searchParams).then((response) => {
      setPlaces(response.data);
    });
  }, [searchParams, setSearchParams]);

  return (
    <Container className="mt-5">
      <Row>
        {places.map((place) => {
          return (
            <Col md={3} className="my-3">
              <HomeCard
                id={place._id}
                title={place.title}
                price={place.price}
                location={place.location}
                images={place.images}
              ></HomeCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default LivingPlacesPage;
