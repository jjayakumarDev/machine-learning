import axios from "axios";

//REST API End points
const GET_API_URL = "https://562355c93d6d.ngrok.io";

class Services {
    getData() {
        return axios.get(GET_API_URL);
    }
}

export default new Services;