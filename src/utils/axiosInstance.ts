import axios from "axios";
import baseUrl from "utils/baseUrl";

const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: {},
});

export default axiosInstance;
