var CryptoJS = require("crypto-js");

export function decryptString(str){

    let bytes = CryptoJS.AES.decrypt(str, 'secret_key_test-uJ8CKmiX');
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData
}


export function setCookie(name, value, options = null) {

    options = {
        path: '/',
        expires: new Date(),
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}



export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


export function deleteCookie(name){
    document.cookie = name+'=;'+'Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.farq.uz;samesite=strict;';
}
