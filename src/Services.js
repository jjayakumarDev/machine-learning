import axios from "axios";

//REST API End points
const GET_API_URL = "https://d6aa18d6b372.ngrok.io";

class Services {
    getData() {
        return axios.get(GET_API_URL);
    }
}

export default new Services;