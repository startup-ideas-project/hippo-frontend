import axios from 'axios';
import {encrypted} from '../utils/crypto'

const iamManagementURL = "http://localhost:4000/iam-management"


const createIAMRole = ({
    accessKey,
    secretKey,
    encodedKey,
    dataMarketId
}) => {
    const body = {
        accessKey: encrypted(accessKey, encodedKey),
        secretKey: encrypted(secretKey, encodedKey),
        dataMarketId
    }
    return axios.post(iamManagementURL, body)
}

const getDataMarket = () => {
    return axios.get(iamManagementURL)
}

export {
    createIAMRole,
    getDataMarket
}