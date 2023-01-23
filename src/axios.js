import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-5c88f/us-central1/api' //The api (cloud function) url
    
});
export default instance;
