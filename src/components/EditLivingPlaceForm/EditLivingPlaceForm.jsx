import "./EditLivingPlaceForm.css";

import { Button, Col, Form, Row } from "react-bootstrap";

import homieService from "../../services/homie.service";
import uploadService from "../../services/upload.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditLivingPlaceForm = ({ id }) => {
  const [livingPlaceData, setlivingPlaceData] = useState({
    //para hacerlo mas sencillo ponemos los datos al mismo nivel
    title: "",
    category: "",
    images: [],
    price: "",
    description: "",
    condition: "",
    m2: "",
    bedrooms: "",
    bathrooms: "",
    elevator: false,
    heating: false,
    "reduced mobility": false,
    parking: false,
    terrace: false,
    garden: false,
    "swimming pool": false,
    "air conditioning": false,
    "pets allowed": false,
    address: "",
    city: "",
    province: "",
    zipcode: "",
    country: "",
  });

  useEffect(() => {
    homieService.getOneLivingPlace(id).then((response) => {
      const place = response.data;
      //para setear, adaptamos los datos que recibimos de la base de datos a al estado de la pagina
      setlivingPlaceData({
        title: place.title,
        category: place.category,
        images: place.images,
        price: place.price,
        description: place.description,
        condition: place.condition,
        address: place.location.address,
        city: place.location.city,
        province: place.location.province,
        zipcode: place.location.zipcode,
        country: place.location.country,
        m2: place.features.m2,
        bedrooms: place.features.bedrooms,
        bathrooms: place.features.bathrooms,
        elevator: place.amenities.elevator,
        heating: place.amenities.heating,
        "reduced mobility": place.amenities["reduced mobility"],
        parking: place.amenities.parking,
        terrace: place.amenities.terrace,
        garden: place.amenities.garden,
        "swimming pool": place.amenities["swimming pool"],
        "air conditioning": place.amenities["air conditioning"],
        "pets allowed": place.amenities["pets allowed"],
      });
    });
  }, []);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setlivingPlaceData({
      ...livingPlaceData,
      [name]: inputValue,
    });
  };

  const uploadLivingPlaceImages = (e) => {
    const uploadData = new FormData();

    //www.freecodecamp.org/news/formdata-explained/

    for (let i = 0; i < e.target.files.length; i++) {
      uploadData.append("images", e.target.files[i]);
    }

    uploadService
      .uploadImage(uploadData)
      .then(({ data }) => {
        const newImages = [...livingPlaceData.images, ...data.cloudinaryUrls];
        setlivingPlaceData({
          ...livingPlaceData,
          images: newImages,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // adaptamos los datos del estado a lo que espera el modelo de la base de datos
    homieService
      .editLivingPlace(id, {
        title: livingPlaceData.title,
        category: livingPlaceData.category,
        images: livingPlaceData.images,
        price: livingPlaceData.price,
        description: livingPlaceData.description,
        condition: livingPlaceData.condition,
        location: {
          address: livingPlaceData.address,
          city: livingPlaceData.city,
          province: livingPlaceData.province,
          zipcode: livingPlaceData.zipcode,
          country: livingPlaceData.country,
        },
        features: {
          m2: livingPlaceData.m2,
          bedrooms: livingPlaceData.bedrooms,
          bathrooms: livingPlaceData.bathrooms,
        },
        amenities: {
          elevator: livingPlaceData.elevator,
          heating: livingPlaceData.heating,
          "reduced mobility": livingPlaceData["reduced mobility"],
          parking: livingPlaceData.parking,
          terrace: livingPlaceData.terrace,
          garden: livingPlaceData.garden,
          "swimming pool": livingPlaceData["swimming pool"],
          "air conditioning": livingPlaceData["air conditioning"],
          "pets allowed": livingPlaceData["pets allowed"],
        },
      })
      .then(({ data }) => {
        console.log(data);
        navigate("/profile/living-places");
      })
      .catch((err) => console.log(err));
  };

  const removeImage = (image) => {
    const newImages = livingPlaceData.images.filter((item) => item !== image);
    setlivingPlaceData({
      ...livingPlaceData,
      images: newImages,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5 className="fw-bold mb-3 fs-3 text-primary">Edit Living Place</h5>
      <Row>
        <Col md={12}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.title}
              onChange={handleInputChange}
              name="title"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              value={livingPlaceData.description}
              onChange={handleInputChange}
              name="description"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              type="text"
              onChange={handleInputChange}
              value={livingPlaceData.category}
              aria-label="Default select example"
            >
              <option>Select</option>
              <option value="flat">Flat</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="duplex">Duplex</option>
              <option value="house">House</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="condition">
            <Form.Label>Condition</Form.Label>
            <Form.Select
              name="condition"
              type="text"
              onChange={handleInputChange}
              value={livingPlaceData.condition}
              aria-label="Default select example"
            >
              <option>Select</option>
              <option value="New">New</option>
              <option value="Second hand">Second hand</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={livingPlaceData.price}
              onChange={handleInputChange}
              name="price"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="m2">
            <Form.Label>Square meters</Form.Label>
            <Form.Control
              type="number"
              value={livingPlaceData.m2}
              onChange={handleInputChange}
              name="m2"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="bedrooms">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              type="number"
              value={livingPlaceData.bedrooms}
              onChange={handleInputChange}
              name="bedrooms"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="bathrooms">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              type="number"
              value={livingPlaceData.bathrooms}
              onChange={handleInputChange}
              name="bathrooms"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.address}
              onChange={handleInputChange}
              name="address"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.city}
              onChange={handleInputChange}
              name="city"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="zipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.zipcode}
              onChange={handleInputChange}
              name="zipcode"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="province">
            <Form.Label>Province</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.province}
              onChange={handleInputChange}
              name="province"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              value={livingPlaceData.country}
              onChange={handleInputChange}
              name="country"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group className="mb-3" controlId="amenities">
            <Form.Label>Amenities</Form.Label>
            <Form.Check
              type="checkbox"
              label="Elevator"
              name="elevator"
              onChange={handleInputChange}
              checked={livingPlaceData.elevator}
            />
            <Form.Check
              type="checkbox"
              label="Heating"
              name="heating"
              checked={livingPlaceData.heating}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Reduced mobility"
              name="reduced mobility"
              checked={livingPlaceData["reduced mobility"]}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Parking"
              name="parking"
              checked={livingPlaceData.parking}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Terrace"
              name="terrace"
              checked={livingPlaceData.terrace}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Garden"
              name="garden"
              checked={livingPlaceData.garden}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Swimming pool"
              name="swimming pool"
              checked={livingPlaceData["swimming pool"]}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Air conditioning"
              name="air conditioning"
              checked={livingPlaceData["air conditioning"]}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              label="Pets allowed"
              name="pets allowed"
              checked={livingPlaceData["pets allowed"]}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {livingPlaceData.images.map((image) => {
          return (
            <Col md={2} className="edit-preview mb-2">
              <img className="w-100" height="100px" src={image} alt="preview" />
              <Button onClick={() => removeImage(image)}>X</Button>
            </Col>
          );
        })}
      </Row>
      <Form.Group controlId="images" className="mb-3">
        <Form.Label>Select images</Form.Label>
        <Form.Control
          type="file"
          name="images"
          multiple={true}
          onChange={uploadLivingPlaceImages}
        />
      </Form.Group>
      <div className="d-flex">
        <Button variant="primary" type="submit" className="ms-auto">
          Edit living place
        </Button>
      </div>
    </Form>
  );
};

export default EditLivingPlaceForm;
