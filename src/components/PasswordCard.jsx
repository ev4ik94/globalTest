import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';

/*------UI Components----*/
import Input from "./UI/Input";
import Button from './UI/Button'

/*-----Constant------*/
import {color_black} from "../constants";

/*-----Icons-----*/
import {Eye} from "./icons/Icons-pack";
import {useState} from "react";


const PasswordWrap = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  margin: 0 25px;
  
`

export default function PasswordCard(){

    const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
    const [typeInput, setTypeInput] = useState(false)
    const {t} = useTranslation()

    const onSubmit = async data => {
        if(data['new_password']===data['new_password_repeat']){
            console.log('submit')
            clearErrors()
        }else{
            setError('new_password_repeat', {
                type: 'manual',
                message: 'Пароль не совпадает'
            })
        }
    }


    return(
        <PasswordWrap className='col-6'>
            <form onSubmit={handleSubmit(onSubmit)} style={{paddingLeft: '30px', paddingRight: '30px'}}>
                <div style={{marginBottom: '35px'}}>
                    <Input  register={register}
                            name='old_password'
                            placeholder={'oldpass'}
                            error={errors}
                            validation={{
                                required: 'min length 4', minLength: 4
                            }}
                            label={t('Inputs.password-label1')}
                            type={!typeInput?'password':'text'}
                            buttonFunc={()=>setTypeInput(!typeInput)}
                            button={<Eye />}
                    />
                </div>
                <div style={{marginBottom: '35px'}}>
                    <Input  register={register}
                            name='new_password'
                            placeholder={'newpass'}
                            error={errors}
                            validation={{
                                required: 'min length 4', minLength: 4
                            }}
                            label={t('Inputs.password-label2')}
                            type={!typeInput?'password':'text'}
                            buttonFunc={()=>setTypeInput(!typeInput)}
                            button={<Eye />}
                    />
                </div>
                <div style={{marginBottom: '35px'}}>
                    <Input  register={register}
                            name='new_password_repeat'
                            placeholder={'newpass'}
                            error={errors}
                            label={t('Inputs.password-label3')}
                            type={!typeInput?'password':'text'}
                            buttonFunc={()=>setTypeInput(!typeInput)}
                            button={<Eye />}
                    />
                </div>

                <div className='d-flex'>
                    <Button text={t('Buttons.password-type-1')}
                            type='submit'
                            style={{fontSize:'14px', marginRight: '16px', fontWeight: '600'}}/>

                    <Button text={t('Buttons.password-type-2')}
                            style={{fontSize:'14px',
                                background: 'transparent',
                                color: color_black,
                                border: '1px solid #D5DDE0',
                                fontWeight: '600'}}/>
                </div>
            </form>
        </PasswordWrap>
    )
}
