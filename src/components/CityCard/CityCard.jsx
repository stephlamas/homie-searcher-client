import "./CityCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CityCard = ({ imageUrl, city }) => {
  return (
    <Link to={`/living-places/?city=${city}`}>
      <Card className="cityCard mx-auto rounded " style={{ width: "18rem" }}>
        <Card.Body className="p-0">
          <Card.Img className="img" src={imageUrl} />
          <Card.Title className="cardTitle">{city}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CityCard;
