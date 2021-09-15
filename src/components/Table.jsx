import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import {useHistory, useLocation } from "react-router-dom";


/*------Constants----*/
import {color_grey2, status_decline, color_black} from "../constants";

/*----Icons----*/
import {Arrow, Block, ThreeDots} from "./icons/Icons-pack";
import {useEffect, useState} from "react";

const WrapTable = styled.div`
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
`

const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0px 8px;
  margin-top: 30px;
  margin-bottom: 60px;
  & tr > th{
    padding: 8px 24px;
    
    & button{
      background-color: transparent;
      border: none;
      outline: none;
      color: ${color_grey2};
      &.button-type-asc{
        & svg{
          transform: rotate(-180deg);
        }
      }
      & svg{
        fill: ${color_grey2};
        margin-left: 8px;
        transform: rotate(0deg);
      }
      
    }
  }
  
  & .table-field-value{
    & td{
      color: ${color_black};
      font-size: 16px;
      background-color: #fff;
      padding: 28px 24px;
      margin-bottom: 8px;
      & svg{
        width: 20px;
        height: 20px;
        margin-right: 30px;
      }
      & button{
        background-color: transparent;
        border: none;
        outline: none;
        
      }
      &:first-child{
        border-radius: 15px 0px 0px 15px;
      }
      &:last-child{
        border-radius: 0px 15px 15px 0px;
      }
    }
  }
  
  @media screen and (max-width: 992px){
    & td{
      font-size: 14px!important;
    }
  }
`


export default function Table({transactions}){
    const {t} = useTranslation()
    const history = useHistory()
    const location = useLocation()
    const [filterButton, setFilterButton] = useState([])

    useEffect(()=>{
        const a = location.search.replace('?', '').split('&')
        let new_arr = a.map(item=>{
            const new_item = item.replace('sort=', '').split(',')
            return {
                name: new_item[0]?new_item[0]:'',
                value: new_item[1]?new_item[1]:''
            }

        })

        setFilterButton(new_arr)

    }, [])

    const filterFunc = (elem, name)=>{

        if(location.search.match(`sort=${name}`)){
            filterButton.forEach(item=>{
                if(item.name===name){
                    let val = item.value==='desc'?'asc':'desc'
                    let d = location.search.replace(`sort=${item.name},${item.value}`, `sort=${item.name},${val}`)
                    history.push(`${location.pathname}${d}`)

                }
            })
        }else{
            history.push(`${location.pathname}${location.search}${location.search.length?'&':'?'}sort=${name},asc`)
        }

    }

    const filterSetButton = (name)=>{
        let arr_fil = filterButton.filter(item=>item.name===name)
        return arr_fil.length&&arr_fil[0].value?arr_fil[0].value:'desc'
    }

    return(
        <WrapTable>
            <TableStyle className='col-12' cellspacing="5" cellpadding="10" border="1">
                <tbody>
                <tr>
                    <th><button onClick={(e)=>{
                        filterFunc(e.currentTarget, 'pini')
                    }}   className={`button-type-${filterSetButton('pini')}`}>{t('Table.title1')} <Arrow /></button></th>
                    <th><button >{t('Table.title2')} <Arrow /></button></th>
                    <th><button onClick={(e)=>{
                        filterFunc(e.currentTarget, 'type')
                    }} className={`button-type-${filterSetButton('type')}`}>{t('Table.title3')} <Arrow /></button></th>
                    <th><button onClick={(e)=>{
                        filterFunc(e.currentTarget, 'status')
                    }} className={`button-type-${filterSetButton('status')}`}>{t('Table.title4')} <Arrow /></button></th>
                    <th></th>
                </tr>
                {
                    transactions.map((item, index)=>{
                        return(
                            <tr className='table-field-value' key={index}>
                                <td>{item.pini}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.type}</td>
                                <td>{
                                    item.status===status_decline?(<><Block /> <span>{item.status}</span> </>):<span>{item.status}</span>
                                }</td>
                                <td><button><ThreeDots /></button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </TableStyle>
        </WrapTable>

    )
}
