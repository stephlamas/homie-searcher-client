import "./LivingPlaceDetailPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaBath, FaBed, FaMoneyBillWave } from "react-icons/fa";
import { GrKey, GrContact, GrLocation } from "react-icons/gr";
import { TiWiFi } from "react-icons/ti"
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { React, useEffect, useState } from "react";

import Amenities from "../../components/Amenities/Amenities";
import ContactForm from "../../components/ContactForm/ContactForm";
import ModalGallery from "../../components/ModalGallery/ModalGallery";
import { RiBuilding2Fill } from "react-icons/ri";
import homieService from "../../services/homie.service";
import { useParams } from "react-router-dom";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
);

function LivingPlaceDetailPage() {
  const [place, setPlaceDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    homieService.getOneLivingPlace(id).then(({ data }) => {
      setPlaceDetail(data);
    });
  }, []);

  return (
    <>
      {/* https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ */}
      <Container>
        <Row className="mt-5 show-button">
          <Col className="gallery">
            {place?.images.slice(0, 4).map((image, index) => {
              return (
                <>
                  <figure className={`gallery__item gallery__item--${index}`}>
                    <img className="gallery__img" src={image} alt="gallery" />
                  </figure>
                </>
              );
            })}
            <ModalGallery images={place?.images} />
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <Row className="d-flex align-items-center mt-5 mb-4">
              <Col md={8}>
                <div>
                  <h2 className="fw-bold">{place?.title}</h2>
                  <span className="m-0 text-black">
                    Entire rental unit hosted by{" "}
                  </span>
                  <span className="fw-bold fs-6 text-primary">
                    {place?.owner.firstName} {place?.owner.lastName}
                  </span>
                </div>
                <Row className="d-flex align-items-center mt-4 mb-3">
                  <Col md={1}>
                    <FaMoneyBillWave size={30} />
                  </Col>{" "}
                  <Col md={11} className="fs-4 fw-bold">{place?.price} €/ month</Col>
                </Row>
                <div className="d-flex align-items-center mt-3">
                  <RiBuilding2Fill size={20} />
                  <span className="mx-3">{place?.features.m2} m2 </span> .
                  <FaBed size={20} />
                  <span className="mx-3">
                    {place?.features.bedrooms} bedrooms
                  </span>{" "}
                  .
                  <FaBath height={20} width={20} />
                  <span className="mx-3">
                    {place?.features.bathrooms} bathrooms
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded-circle shadow img-profile"
                    src={place?.owner.image}
                    alt="user-img"
                  />
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center mt-4">
              <Col md={1}>
                <GrKey size={30} className="text-primary" />
              </Col>
              <Col md={11}>
                <p className="fw-bold m-0">Fantastic arrival process</p>
                <p className="m-0">
                  100% of recent guests have given the arrival process a 5-star
                  rating.
                </p>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mt-2">
              <Col sm={1}>
                <TiWiFi size={30} />
              </Col>
              <Col md={10}>
                <p className="fw-bold m-0">Free Wi-fi</p>
                <p className="m-0">
                  Guests often look for this popular service.
                </p>
              </Col>
            </Row>
            <Row className="d-flex align-items-center mt-2">
              <Col sm={1}>
                <GrContact size={30} />
              </Col>
              <Col md={10}>
                <p className="fw-bold m-0">Great communication</p>
                <p className="m-0">
                  100% of recent guests have rated this place 5-star in
                  communication.
                </p>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center p-2 mt-2">
              <p>{place?.description}</p>
            </Row>
            <hr />
            <Amenities amenities={place?.amenities} />
            <hr />

            <Row className="d-flex align-items-center my-5">
              <Col md={1}>
                <GrLocation size={40} />
              </Col>
              <Col md={11}>
                <p className="m-0">
                  {" "}
                  {place?.location.address}, {place?.location.city}
                </p>
                <p className="m-0">
                  {" "}
                  {place?.location.province}, {place?.location.zipcode}.{" "}
                  <span> </span>
                  {place?.location.country}
                </p>
              </Col>
            </Row>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <Col md={4}>
            <ContactForm owner={place?.owner} id={place?._id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LivingPlaceDetailPage;
