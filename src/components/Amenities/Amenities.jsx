import React from "react";
import {
  FaGripfire,
  FaParking,
  FaWheelchair,
  FaSwimmingPool,
  FaFan,
} from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { MdBalcony, MdPets } from "react-icons/md";
import { GiGrass } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import "./Amenities.css"

function Amenities({ amenities }) {
  return (
    <Row>
      <Col md={6}>
        <div>
          <p>
            <FaGripfire size={30} className="me-3" />
            {amenities?.heating ? (
              <span className="fw-bold">Heating</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Heating
              </span>
            )}
          </p>

          <p>
            <GrElevator size={30} className="me-3" />
            {amenities?.elevator ? (
              <span className="fw-bold"> Elevator</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Elevator
              </span>
            )}
          </p>

          <p>
            <MdBalcony size={30} className="me-3" />
            {amenities?.terrace ? (
              <span className="fw-bold text-black"> Terrace</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Terrace
              </span>
            )}
          </p>
          <p>
            <FaSwimmingPool size={30} className="me-3" />
            {amenities?.["swimming pool"] ? (
              <span className="fw-bold"> Swimming pool</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Swimming pool
              </span>
            )}
          </p>

          <p>
            <MdPets size={30} className="me-3" />
            {amenities?.["pets allowed"] ? (
              <span className="fw-bold"> Pets allowed</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Pets allowed
              </span>
            )}
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div>
          <p>
            <FaWheelchair size={30} className="me-3" />
            {amenities?.["reduced mobility"] ? (
              <span className="fw-bold">Reduced mobility</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Reduced mobility
              </span>
            )}
          </p>
          <p>
            <FaParking size={30} className="me-3" />
            {amenities?.parking ? (
              <span className="fw-bold">Parking</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Parking
              </span>
            )}
          </p>

          <p>
            <GiGrass size={30} className="me-3" />
            {amenities?.garden ? (
              <span className="fw-bold"> Garden</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Garden
              </span>
            )}
          </p>

          <p>
            <FaFan size={30} className="me-3" />
            {amenities?.["air conditioning"] ? (
              <span className="fw-bold"> Air conditioning</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Air conditioning
              </span>
            )}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Amenities;
