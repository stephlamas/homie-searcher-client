import { Container, Row, Col } from "react-bootstrap";

import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const ProfilePage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <ProfileMenu />
        </Col>
        <Col md={8}>
          <ProfileForm />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfilePage;
