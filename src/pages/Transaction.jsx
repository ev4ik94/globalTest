import {useEffect, useState } from "react";
import styled from 'styled-components'
import {useLocation } from "react-router-dom";
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
    const { t } = useTranslation();
    const location = useLocation()
    const {jwtToken} = getUserData()

    useEffect(()=>{
        if(jwtToken){
            getTransaction(jwtToken)
        }
    }, [location.search])




    const getTransaction = async(token)=>{
        const sort = location.search.replace('?', '').split('&')
        const sort_arr = sort.map(item=>item.replace('sort=', ''))
        var url = new URL(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_TRANSACTIONS}`)
        const params = new URLSearchParams()
        sort_arr.forEach(item=>{
               params.append('sort', item)
           })
        url.search = params.toString()

        await request(url,  'GET', params, {
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
            {loading?(<p>Loading...</p>):<Table
                transactions={transactions}/>}
        </div>
    )
}
