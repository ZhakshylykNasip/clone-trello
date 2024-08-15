import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://8fe45f83dbfee114.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
