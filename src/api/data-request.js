import axios from 'axios';

const dataRequestURL = "http://localhost:4000/data-request" || process.env.backendURL

const createDataRequest = ({
    data_market_id,
    consumer_id
}) => {
    const body = {
        data_market_id,
        consumer_id,
        isApproved: `pending`
    }
    return axios.post(dataRequestURL, body)
}

const getDataRequest = (data_provider_id) => {
    const URL = `http://localhost:4000/data-request/provider/${data_provider_id}`
    return axios.get(URL, {})
}

const dataRequestPermission = ({uuid, isApproved}) => {
    const body = {
        uuid,
        isApproved
    }

    return axios.put(dataRequestURL, body)
}

export {
    createDataRequest,
    getDataRequest,
    dataRequestPermission
}