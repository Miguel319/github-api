import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constants";

export const http: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
