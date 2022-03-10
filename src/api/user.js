import axios from 'axios';

const userServiceURL = "http://localhost:4000/" || process.env.backendURL

const loginUser = (userName, password) => {
    const body = {
        email: userName,
        password: password
    }
    return axios.post(`${userServiceURL}/login`, body)
}

const signUpUser = (userName, password) => {
    const body = {
        email: userName,
        password: password
    }
    return axios.post(`${userServiceURL}/signup`, body)
}

export {
    loginUser,
    signUpUser
}