import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const timeout = 16000;

const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default instance;
