import axios from "axios";

class ProfileService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/profile`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  getUserProfile = () => {
    return this.api.get(`/`);
  };

  updateUserProfile = (data) => {
    return this.api.put(`/`, data);
  };

  // deleteUserProfile = () => {
  //   return this.api.delete(`/`);
  // };

  getLivingPlaces = () => {
    return this.api.get("/living-places");
  };

  getMessages = () => {
    return this.api.get("/messages");
  };
}

const profileService = new ProfileService();

export default profileService;
