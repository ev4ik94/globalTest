var CryptoJS = require("crypto-js");

export function decryptString(str){

    let bytes = CryptoJS.AES.decrypt(str, 'secret_key_test-uJ8CKmiX');
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData
}



