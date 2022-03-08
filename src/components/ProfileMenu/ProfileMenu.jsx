import React, { useContext } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AuthContext } from "../../context/auth.context";
import "./ProfileMenu.css";
import { NavLink } from "react-router-dom";

function ProfileMenu() {
  const { user } = useContext(AuthContext);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt)
    return date.toDateString()
  }
  return (
    <>
      <Card className="profile-card border">
        <Card.Header className="profile-card-header">
          <Row className="align-items-center">
            <Col md={5} className="text-center">
              <img
                className="rounded-circle shadow"
                src={user?.image}
                alt=""
                width="115px"
                height="115px"
              />
            </Col>
            <Col md={7}>
              <p className="text-dark fw-bold fs-4 m-0">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-muted m-0">
                Joined {formatDate(user?.createdAt)}
              </p>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item href="/profile">
              <CgProfile className="me-2" />
              <NavLink to="/profile">Profile</NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <BiBuildingHouse className="me-2" />
              <NavLink to="/profile/living-places">Living places</NavLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <BiMessageSquareDetail className="me-2" />
              <NavLink to="/profile/messages">Messages</NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProfileMenu;
