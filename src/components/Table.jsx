import styled from 'styled-components'
import { useTranslation } from 'react-i18next';


/*------Constants----*/
import {color_grey2, status_decline, color_black} from "../constants";

/*----Icons----*/
import {Arrow, Block, ThreeDots} from "./icons/Icons-pack";

const WrapTable = styled.div`
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
`

const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0px 8px;
  margin-top: 30px;
  margin-bottom: 30px;
  & tr > th{
    padding: 8px 24px;
    & button{
      background-color: transparent;
      border: none;
      outline: none;
      color: ${color_grey2};
      & > svg{
        fill: ${color_grey2};
        margin-left: 8px;
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
    return(
        <WrapTable>
            <TableStyle className='col-12' cellspacing="5" cellpadding="10" border="1">
                <tbody>
                <tr>
                    <th><button>{t('Table.title1')} <Arrow /></button></th>
                    <th><button>{t('Table.title2')} <Arrow /></button></th>
                    <th><button>{t('Table.title3')} <Arrow /></button></th>
                    <th><button>{t('Table.title4')} <Arrow /></button></th>
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
