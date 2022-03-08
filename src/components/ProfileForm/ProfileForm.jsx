import { useContext } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import uploadService from "../../services/upload.service";
import profileService from "../../services/profile.service";
import { AuthContext } from "../../context/auth.context";

function ProfileForm() {
  const { user, loadUser } = useContext(AuthContext);

  const [updateForm, setUpdateForm] = useState(user);

  const [loadingImage, setLoadingImage] = useState(false);

  const uploadProfileImage = (e) => {
    setLoadingImage(true);

    const uploadData = new FormData();
    uploadData.append("images", e.target.files[0]);

    uploadService
      .uploadImage(uploadData)
      .then(({ data }) => {
    console.log(data);

        setLoadingImage(false);
        setUpdateForm({
          ...updateForm,
          image: data.cloudinaryUrls[0]
        });
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    profileService
      .updateUserProfile(updateForm)
      .then((response) => loadUser())
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="updateForm">
        <Form.Group className="mb-3 w-100">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={updateForm.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={updateForm.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={updateForm.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={updateForm.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={updateForm.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Select image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={uploadProfileImage}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default ProfileForm;
