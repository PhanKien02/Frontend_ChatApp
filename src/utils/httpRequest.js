import axios from "axios"

const baseURLDev = "http://localhost:8000/api/"
// const baseURLProduct = " "
const instance = axios.create({
    baseURL: baseURLDev  ,
    timeout: 1000000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
