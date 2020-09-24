import axios from "axios";

const instance = axios.create({baseURL:'https://still-headland-39753.herokuapp.com'});
export default instance;