import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true
})

const Http = {
    get: Api.get,
    post: Api.post,
    delete: Api.delete,
    put: Api.put,
    patch: Api.patch,
}

export default Http;