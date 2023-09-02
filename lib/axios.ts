import axios from "axios"

const API = axios.create({
    baseURL: "https://api.trackingpox.com/api/",
    timeout: 4000,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
})
//export
export default API
