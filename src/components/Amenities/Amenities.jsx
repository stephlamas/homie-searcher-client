import React from "react";
import { FaGripfire } from "react-icons/fa";
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
            <FaGripfire size={40} className="text-primary" />
            {amenities?.elevator ? (
              <span className="fw-bold">Elevator</span>
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
            {amenities?.heating ? (
              <span className="fw-bold">Heating</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Heating
              </span>
            )}
          </p>
          <p>
            <FaGripfire size={40} className="text-primary" />
            {amenities?.elevator ? (
              <span className="fw-bold">Elevator</span>
            ) : (
              <span className="fw-bold text-decoration-line-through">
                Elevator
              </span>
            )}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Amenities;
