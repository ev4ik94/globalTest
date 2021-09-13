import {useState, useCallback} from 'react'
import axios from 'axios'


/*----Functions----*/
import {decryptString} from "../components/utils-func";

var CryptoJS = require("crypto-js");


export function AxiosApi(){

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /*-----Abort Controller -----*/



    const resetErr = ()=>{
        setError(null)
    }



    const request = useCallback(async(url, method='GET', data=null, headers={})=>{

        setLoading(true)
        const instance = axios.create({
            withCredentials: true
        })



        await instance.interceptors.request.use(request=>{
                return request
            },
            error=>{
                return Promise.reject(error)
            })


        await instance.interceptors.response.use(response=>{
                setLoading(false)
                return response
            },
            error=>{

                setLoading(false)
                const {response} = error

                if(response && response.status){
                    switch(response.status){
                        case 400:
                            setError(response.data)
                            break;
                        case 401:

                            if(localStorage.getItem('user')){
                                let getData = decryptString(localStorage.getItem('user'));
                                const {refreshToken, jwtToken} = getData
                                instance({
                                    method: 'POST',
                                    url: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_TOKENS}`,
                                    data: JSON.stringify({"refresh_token":refreshToken}),
                                    headers: {'Authorization': `Bearer ${jwtToken}`}
                                }).then((result)=> {
                                    var cipherData = CryptoJS.AES.encrypt(JSON.stringify(result.data), 'secret_key_test-uJ8CKmiX').toString();
                                    localStorage.setItem('user', cipherData)
                                }).catch(e=>console.log(e))
                            }
                            break;
                        case 403:
                            console.log('403')
                            break;
                        case 404:
                            console.log('404')
                            break;
                        case 500:
                            console.log('500')
                            break;
                        default:
                            break;
                    }
                }else{
                    if(error){
                        console.log('error server')
                    }
                }
                return Promise.reject(error)

            })


        return await instance({
            method,
            url,
            data,
            headers
        })







    }, [])

    return {request, loading, error, resetErr}
}
