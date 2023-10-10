import axios from "axios";
const request = axios.create({
  baseURL: "/dev-api",
  timeout: 20000,
});

export default request;
