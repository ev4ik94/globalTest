import {useState} from 'react'
import {AxiosApi} from "./axios.hook"
import {decryptString} from '../components/utils-func'
import {useHistory} from "react-router-dom";

var CryptoJS = require("crypto-js");




export function useAuth(){
    const [user, setUser] = useState(null)
    const {request} = AxiosApi()
    const history = useHistory()

    const login = (data)=>{
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret_key_test-uJ8CKmiX').toString();
        localStorage.setItem('user', ciphertext)
        setUser(data)
    }



    const logout = async()=>{
        if(getUserData()){
            const {jwtToken} = getUserData()
            request(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_LOGOUT}`, 'DELETE', null, {
                'Authorization': `Bearer ${jwtToken}`
            }).then(()=>{
                localStorage.removeItem('user')
                history.push('/authentication')
                setUser(null)
            }).catch(e=>{})
        }


    }



    const getUserData = ()=>{
        return localStorage.getItem('user')?decryptString(localStorage.getItem('user')):null
    }

    return {user, login, logout, getUserData}

}
