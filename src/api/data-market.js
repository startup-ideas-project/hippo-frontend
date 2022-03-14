import axios from 'axios';

const dataMarketURL = "http://localhost:4000/data-marketplace" || process.env.backendURL

const createDataMarket = ({
    providerName,
    data_provider_id,
    data_base_name,
    URL_to_IAM_key
}) => {
    const body = {
        providerName,
        data_provider_id,
        data_base_name,
        data_base_url: "https://testdatabase.com",
        URL_to_IAM_key
    }
    return axios.post(dataMarketURL, body)
}

const getDataMarket = () => {
    return axios.post(dataMarketURL, {})
}

export {
    createDataMarket,
    getDataMarket
}