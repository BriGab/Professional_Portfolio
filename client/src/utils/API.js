import axios from "axios"; 

export default {

    getProjects: function () {
        return axios.get("/api/portfolio")
    }
}