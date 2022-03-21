
import { JSEncrypt } from "jsencrypt";



const encrypted = (value, encoded_key ) =>{
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(encoded_key)
    return encryptor.encrypt(value)
}

export {
    encrypted
}