import axios from "axios";

class HomieService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  getAllLivingPlaces = (searchParams) => {
    const queryString = searchParams.toString();
    return this.api.get(`/living-places/?${queryString}`);
  };

  getOneLivingPlace = (id) => {
    return this.api.get(`/living-places/${id}`);
  };

  createLivingPlace = (homie) => {
    return this.api.post(`/living-places`, homie);
  };

  editLivingPlace = (id, data) => {
    return this.api.put(`/living-places/${id}`, data);
  };

  deleteLivingPlace = (id) => {
    return this.api.delete(`/living-places/${id}`);
  };

  saveMessageLivingPlace = (id, message) => {
    return this.api.post(`/living-places/${id}/message`, message);
  };
}

const homieService = new HomieService();

export default homieService;
