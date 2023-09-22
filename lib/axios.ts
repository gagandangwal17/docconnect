import axios from "axios";

const API = axios.create({
  baseURL: "https://api.doconnectdb.tech/api/",
  timeout: 4000,
});
//export
export default API;
