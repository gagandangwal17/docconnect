import axios from "axios"

const API = axios.create({
    baseURL: "http://34.125.76.143/api/",
    timeout: 4000,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
})
//export
export default API
