import { Carousel, Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";

import CityCard from "../../components/CityCard/CityCard";
import Header from "../../components/Header/Header";
import HomeCard from "../../components/HomeCard/HomeCard";
import homieService from "../../services/homie.service";
import { useState } from "react";

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
        <h3 className="mt-5 mb-3">Explore Destinations</h3>
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
                <CityCard imageUrl="./../../images/berlin.jpeg" 
                city="Berlin" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/sydney.jpeg" 
                city="Sydney" />
              </Col>
              <Col md={3}>
                <CityCard imageUrl="./../../images/bcn.jpeg" 
                city="Barcelona" />
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
        <h3 className="mt-5 mb-3">Travelers’ Choice</h3>
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

