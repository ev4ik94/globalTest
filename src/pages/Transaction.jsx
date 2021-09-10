import {useEffect, useState} from "react";
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

/*-----Hooks---*/
import {AxiosApi} from "../hooks/axios.hook";
import {useAuth} from "../hooks/authentication.hook";


/*---Components---*/
import Table from "../components/Table";

/*----Constants----*/
import {color_black} from "../constants";


const Title = styled.p`
  color: ${color_black};
  font-size: 24px;
  font-weight: 600;
`

export default function Transaction(){
    const {request, loading} = AxiosApi();
    const {getUserData} = useAuth()
    const [transactions, setTransactions] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        const {jwtToken} = getUserData()
        if(jwtToken){
            getTransaction(jwtToken)
        }
    }, [])

    const getTransaction = async(token)=>{
        await request(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_TRANSACTIONS}`, 'GET', null, {
            'Authorization': `Bearer ${token}`
        })
            .then(result=>{
                setTransactions(result.data.content)
                setTotalCount(result.data.totalElements)
            }).catch(e=>{})
    }

    return(
        <div style={{paddingTop: '60px'}}>
            <Title>{t('Header.links1')} ({totalCount})</Title>
            {loading?(<p>Loading...</p>):<Table transactions={transactions}/>}
        </div>
    )
}
