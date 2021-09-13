import {useContext} from "react";
import styled from 'styled-components'
import {Context} from "../context/context";

import {useTranslation} from "react-i18next";

/*----Components----*/
import AuthForm from "../components/Auth-form";

/*---Styles Components---*/
import {Title} from "../styles/style-components/Title";
import {color_grey2} from "../constants";

const WarningMessage = styled.span`
  color: ${color_grey2};
  text-align: center;
  font-size: 15px;
  display: block;
`

export default function Authentication(){
    const {timeoutLogout, setTimeoutLogout} = useContext(Context);
    const {t} = useTranslation()

    return(
        <section style={{marginTop: '100px'}}>
            <div className='text-center'>
                <img src="/icons/logo.svg" alt="Logo"/>
            </div>
            <div className='mt-5'>
                <Title className='text-center'>{t('Inputs.auth-title')}</Title>
                {timeoutLogout? <WarningMessage>{t('Input.message-err')}</WarningMessage>:''}
            </div>
            <AuthForm setTimeoutLogout={setTimeoutLogout}/>
        </section>
    )
}
