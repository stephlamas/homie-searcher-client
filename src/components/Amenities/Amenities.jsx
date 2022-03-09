import React from "react";
import { FaGripfire, FaParking } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { Col, Row } from "react-bootstrap";

function Amenities({ amenities }) {
  return (
    <Row>
      <Col md={6}>
        <div>
          <p>
            <FaGripfire size={40} className="text-primary" />
            {amenities?.heating ? (
              <span className="fw-bold">Heating</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Heating
              </span>
            )}
          </p>

          <p>
            <GrElevator size={30} className="text-primary" />
            {amenities?.elevator ? (
              <span className="fw-bold"> Elevator</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Elevator
              </span>
            )}
          </p>
        </div>
      </Col>

      <Col md={6}>
        <div>
          <p>
            <FaGripfire size={40} className="text-primary" />
            {amenities?.["reduced mobility"] ? (
              <span className="fw-bold">Reduced mobility</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Reduced mobility
              </span>
            )}
          </p>
          <p>
            <FaParking size={30} className="text-primary" />
            {amenities?.parking ? (
              <span className="fw-bold">Parking</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Parking
              </span>
            )}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Amenities;
