import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Retry once if a timeout or network error occurs
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    if (
      config &&
      !config.__isRetryRequest &&
      (!error.response || error.code === "ECONNABORTED")
    ) {
      config.__isRetryRequest = true;

      // Wait 2 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return api(config);
    }

    return Promise.reject(error);
  }
);

export default api;