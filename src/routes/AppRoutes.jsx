import HomePage from "./../pages/HomePage/HomePage";
import LivingPlacesPage from "./../pages/LivingPlacesPage/LivingPlacesPage";
import LivingPlaceDetailPage from "./../pages/LivingPlaceDetailPage/LivingPlaceDetailPage";
import SignupPage from "./../pages/SignupPage/SignupPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import ProfileLivingPlaces from "./../pages/ProfileLivingPlaces/ProfileLivingPlaces";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProfileMessages from "./../pages/ProfileMessages/ProfileMessages";
import PrivateRoute from "./PrivateRoute";
import NewLivingPlaceFormPage from "./../pages/NewLivingPlaceFormPage/NewLivingPlaceFormPage";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactPage from "../pages/ContactPage/ContactPage";

import { Routes, Route } from "react-router-dom";
// import EditLivingPlacesForm from "../components/EditLivingPlaceForm/EditLivingPlaceForm";
import EditLivingPlaceFormPage from "../pages/EditLivingPlaceFormPage/EditLivingPlaceFormPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/living-places" element={<LivingPlacesPage />} />
      <Route path="/living-places/:id" element={<LivingPlaceDetailPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/profile" element={<PrivateRoute />}>
        <Route path="" element={<ProfilePage />} />
      </Route>
      <Route path="/profile/living-places" element={<PrivateRoute />}>
        <Route path="" element={<ProfileLivingPlaces />} />
        <Route path="create" element={<NewLivingPlaceFormPage />} />
        <Route path=":id/edit" element={<EditLivingPlaceFormPage />} />
      </Route>
      <Route path="/profile/messages" element={<PrivateRoute />}>
        <Route path="" element={<ProfileMessages />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes> 
  );
};

export default AppRoutes;
