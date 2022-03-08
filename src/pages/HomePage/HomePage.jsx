import React, { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";

import CityCard from "../../components/CityCard/CityCard";
import Header from "../../components/Header/Header";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import homieService from "../../services/homie.service";

function HomePage() {

const [places, setPlaces] = useState([])

  useEffect(() => {
    const searchParams = new URLSearchParams({ limit: 4})
    homieService.getAllLivingPlaces(searchParams)
    .then((response) => {
      setPlaces(response.data)
    })
  }, [])


  return (
    <>
      <Header />
      <Container>
        <h2 className="mt-5 mb-3">Explore Destinations</h2>
        <Carousel fade>
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/newyork.jpeg"
                  city="New York"
                />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/berlin.jpeg" city="Berlin" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/sydney.jpeg" city="Sydney" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/bcn.jpeg" city="Barcelona" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <CityCard imageUrl="./../../images/sydney.jpeg" city="Sydney" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/bcn.jpeg" city="Barcelona" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/berlin.jpeg" city="Berlin" />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/newyork.jpeg"
                  city="New York"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <h2 className="mt-5 mb-3">Travelers’ Choice</h2>
        <Row>
          {places.map((place) => {
            return (
              <Col md={3}>
                <HomeCard
                  id={place._id}
                  price={place.price}
                  location={place.location}
                  title={place.title}
                  images={place.images}
                ></HomeCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

