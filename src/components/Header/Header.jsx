import "./Header.css";

import { Carousel } from "react-bootstrap";
import image1 from "../../images/carousel1.png";
import image2 from "../../images/carousel2.png";
import image3 from "../../images/carousel3.png";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

function HeaderComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="header">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="search">
        <div className="content">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
