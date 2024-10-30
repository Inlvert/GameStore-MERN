import axios from "axios";
import CONSTANTS from "../constants";
import Cookies from "js-cookie";

const httpClient = axios.create({
  baseURL: CONSTANTS.HTTP_SERVER_URL,
});

let accessToken = null;

export const clearToken = () => {
  accessToken = null;
  Cookies.remove(CONSTANTS.REFRESH_TOKEN);
};

// Додати перехоплювач запиту
httpClient.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Зробіть щось із помилкою запиту
    return Promise.reject(error);
  }
);

// Додайте перехоплювач відповідей
httpClient.interceptors.response.use(
  function (response) {
    if (response?.data?.data?.tokenPair) {
      const { tokenPair } = response.data.data;

      accessToken = tokenPair.accessToken;

      Cookies.set(CONSTANTS.REFRESH_TOKEN, tokenPair.refreshToken);
    }
    return response;
  },
  async function (error) {
    const {
      response: { status },
    } = error;

    const refreshTokenFromCookies = Cookies.get(CONSTANTS.REFRESH_TOKEN);

    if (refreshTokenFromCookies && status === 419) {
      const {
        data: {
          data: { tokenPair },
        },
      } = await axios.post(`${CONSTANTS.HTTP_SERVER_URL}/auth/refresh`, {});

      accessToken = tokenPair.accessToken;

      Cookies.set(CONSTANTS.REFRESH_TOKEN, tokenPair.refreshToken);

      error.config.headers["Authorization"] = `Bearer ${accessToken}`;

      return httpClient.request(error.config);

    }

    return Promise.reject(error);
  }
);

export const login = (userData) => httpClient.post("/auth/login", userData);
export const registration = (userData) =>
  httpClient.post("/auth/registration", userData);
export const refresh = (refreshToken) =>
  httpClient.post("/auth/refresh", { refreshToken });
