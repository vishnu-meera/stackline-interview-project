// axiosconfig.js
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://stackline-api.firebaseapp.com"
});
