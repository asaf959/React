import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Content-Type"] = "multipart/form-data";

instance.interceptors.request.use((request) => {
  const token = localStorage.access_token;
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

instance.interceptors.response.use((response) => {
  return response;
});

export default instance;
