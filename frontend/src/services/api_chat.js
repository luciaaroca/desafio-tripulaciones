// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://botassistant-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
