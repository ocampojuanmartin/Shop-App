import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
// im copying the token from an admin
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken


export const publicRequest = axios.create({ // for regular visitors
    baseURL: BASE_URL,
})

export const userRequest = axios.create({ // for admins since it includes the admin token
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})
