import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  params: {
    language: "en",
    api_key: process.env.VUE_APP_TMDB_KEY,
  },
});

const authHeader = {
  setAuthToken(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteAuthToken() {
    api.defaults.headers.common.Authorization = "";
  },
};

export { api, authHeader };
