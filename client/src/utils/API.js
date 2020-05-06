import axios from "axios"; 

export default {

    getProjects: function () {
        return axios.get("/api/portfolio")
    },
    postMessage: function (message) {
        return axios.post("/api/contact", message)
    }
}