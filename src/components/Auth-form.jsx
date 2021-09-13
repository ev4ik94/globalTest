import { useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import { useTranslation } from 'react-i18next';


/*-----Constants style----*/
import {color_red, color_grey2} from "../constants";

/*-----UI components----*/
import Button from "../components/UI/Button";
import Input from "./UI/Input";


/*-----Icons-----*/
import {Eye} from "./icons/Icons-pack";


/*-----Hooks----*/
import {AxiosApi} from "../hooks/axios.hook";
import {useAuth} from "../hooks/authentication.hook";


const SpanError = styled.span`
  color: ${color_red};
  text-align: center;
  font-size: 16px;
  display: block;
`




function AuthForm({setTimeoutLogout}){
    const { register, handleSubmit, watch, formState: { errors, touchedFields }, setError, clearErrors } = useForm();
    const [typeInput, setTypeInput] = useState(false)
    let disabled = true
    const history = useHistory()
    const {t} = useTranslation()

    const {request, error, loading, resetErr} = AxiosApi()
    const {login} = useAuth()

    useEffect(()=>{
        if(error){
            setError('login', {})
            setError('password', {})
        }
    }, [error])



    const onSubmit = async data => {
        if(!Object.keys(errors).length){
            clearError()
            await request(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_LOGIN}`,
                'POST', data)
                .then(result=>{
                    login(result.data)
                    setTimeoutLogout(false)
                    history.push('/')
                })
                .catch(e=>{})
        }
    };


    disableButton()

    function disableButton(){
        if(watch("login")){
            disabled = !(watch("login").length && watch("password").length)
        }
    }

    function clearError(){
        if(error&&touchedFields){
            clearErrors('login')
            clearErrors('password')
            resetErr()
        }
    }



    return(
       <div className='col-lg-3 col-md-6 mx-auto'>

           <form onSubmit={handleSubmit(onSubmit)}>
               {error?(<SpanError>{error.message}</SpanError>):''}
               <Input  register={register}
                       name='login'
                       validation={{required:true}}
                       placeholder={'UUID'}
                       error={errors}
               />
               <Input  register={register}
                       name='password'
                       validation={{required:true}}
                       placeholder={'Пароль'}
                       error={errors}
                       type={!typeInput?'password':'text'}
                       buttonFunc={()=>setTypeInput(!typeInput)}
                       button={<Eye />}
               />
               <Button text={t('Buttons.auth-type-1')} disabled={disabled||loading} type={'submit'}/>
           </form>
       </div>
    )
}

export default AuthForm
