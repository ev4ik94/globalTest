import {useState} from 'react'
import {AxiosApi} from "./axios.hook"
import {decryptString, setCookie, deleteCookie, getCookie} from '../components/utils-func'

var CryptoJS = require("crypto-js");




export function useAuth(){
    const [user, setUser] = useState(null)
    const {request} = AxiosApi()

    const login = (data)=>{
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret_key_test-uJ8CKmiX').toString();
        setCookie('user', ciphertext)
        setUser(data)
    }



    const logout = async()=>{
        request(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_LOGOUT}`, 'DELETE').then(()=>{
            deleteCookie('user')
            setUser(null)
        }).catch(e=>console.log(e.message))

    }

    const refreshToken = async()=>{

    }


    const getUserData = ()=>{
        const userData = decryptString(getCookie('user'))
        return userData
    }

    return {user, login, logout, getUserData}

}
