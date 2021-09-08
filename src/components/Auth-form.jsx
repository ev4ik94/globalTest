import { useForm } from "react-hook-form";


/*-----UI components----*/
import Button from "../components/UI/Button";
import Input from "./UI/Input";


/*-----Icons-----*/
import {Eye} from "./icons/Eye";


/*-----Style----*/
import {Title} from "../styles/style-components/Title";
import {useState} from "react";


/*-----Hooks----*/
import {AxiosApi} from "../hooks/axios.hook";
import {useAuth} from "../hooks/authentication.hook";


function AuthForm(){
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const [typeInput, setTypeInput] = useState(false)
    let disabled = true

    const {request, error, loading} = AxiosApi()
    const {login} = useAuth()

    const onSubmit = async data => {
        if(!Object.keys(errors).length){
            await request(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_USER_LOGIN}`,
                'POST', data)
                .then(result=>{
                    console.log(result)
                    login(result.data)
                })
                .catch(e=>{})

            console.log(error)
        }
    };


    disableButton()

    function disableButton(){
        if(watch("login")){
            disabled = !(watch("login").length && watch("password").length)
        }
    }



    return(
       <div className='col-3 mx-auto mt-5'>
            <Title className='text-center'>Вход</Title>
           <form onSubmit={handleSubmit(onSubmit)}>
               <Input  register={register} name='login' placeholder={'UUID'} error={errors}/>
               <Input  register={register}
                       name='password'
                       required={true}
                       placeholder={'Пароль'}
                       error={errors}
                       type={!typeInput?'password':'text'}
                       buttonFunc={()=>setTypeInput(!typeInput)}
                       button={<Eye />}
               />
               <Button text={'Войти'} disabled={disabled||loading} type={'submit'}/>
           </form>
       </div>
    )
}

export default AuthForm
