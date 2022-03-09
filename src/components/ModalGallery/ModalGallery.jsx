import "./ModalGallery.css";

import { Button, Carousel, Modal } from "react-bootstrap";

import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";

function ModalGallery({images}) {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        className="show-button"
        size="xs"
        onClick={() => setLgShow(true)}
      >
        <CgMenuGridO  size={25}/> <span>Show all photos</span>
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel
            interval={null}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {images?.map((imageUrl) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt="carousel-img"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalGallery
