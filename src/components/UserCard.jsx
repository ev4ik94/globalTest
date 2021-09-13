import styled from 'styled-components'
import { useTranslation } from 'react-i18next';


/*----Icons----*/
import {Check, ChevronDown, Block} from "./icons/Icons-pack";

/*---Constants Style----*/
import {color_purple, color_black, color_light_grey} from "../constants";


/*------Hooks----*/
import {useAuth} from "../hooks/authentication.hook";


import Button from "./UI/Button";

const UserCardWrap = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  margin: 0 25px;
  
  @media screen and (max-width: 992px){
    margin: 0 auto;
  }

  @media screen and (max-width: 768px){
    padding: 20px;
  }
  
`

const StatusBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  justify-content: center;
  & p{
    color: ${color_black};
    font-size: 16px;
    font-weight: 700;
    margin: 0 8px;
  }
  
 
`

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${color_purple};
  border-radius: 50%;
  padding: 2px 5px;
  & svg {
    width: 100%;
    height: 100%;
    vertical-align: baseline!important;
    & path{
      fill: #fff;
    }
  }

  &.status_blocked{
    background-color: #fff;
    padding: 0;
    width: 20px;
    height: 20px;
  }

`

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px;
  
  &.status__blocked{
    & .button{
      opacity: .5;
    }
  }
  
  & .user-avatar-picture{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
  }
  
  & .button{
    padding: 12px 16px;
    outline: none;
    border: 1px solid ${color_light_grey};
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    margin: 0px 8px;
    width: 30%;
    background-color: transparent;
  }
  
  & .button_upload{
    color: ${color_purple}
  }

  & .button_remove{
    color: ${color_black}
  }
  
  @media screen and (max-width: 769px){
    & .button_group{
      & > button{
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 343px){
    & .button_group{
      & > button{
        font-size: 12px;
      }
    }
  }
`

const UserInfo = styled.div`

  &.status__blocked{
    & .field_name,
    & .field_value{
      opacity: .5;
    }
  }
    & > div{
      display: flex;
      justify-content: space-between;
      margin: 20px 0px;
      
      & p{
        font-size: 16px;
        color: ${color_black};
      }
      
      & .field_name{
        font-weight: 400;
      }

      & .field_value{
        font-weight: 700;
        text-align: left;
      }
    }
  
  @media screen and (max-width: 769px){
    & > button{
      margin: 40px 0px 20px 0;
    }
    & > div{
      & > div{
        padding-right: 10px;
      }
      & p{
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 343px){
    & > button{
      font-size: 12px;
    }

  }

  @media screen and (max-width: 343px){
   
    & > div{
      & p{
        font-size: 12px;
      }
    }
  }
`

export default function UserCard({userData}){

    const {logout} = useAuth();
    const {t} = useTranslation()


    return(
        <UserCardWrap className='col-lg-6 col-md-10 col-12'>

            <StatusBlock>
                <CheckIcon>
                    <Check />
                </CheckIcon>
                <p className='mb-0'>{t('Account.text1')}</p>
                <ChevronDown />
            </StatusBlock>

            {/*<StatusBlock>*/}
            {/*    <CheckIcon className='status_blocked'>*/}
            {/*        <Block />*/}
            {/*    </CheckIcon>*/}
            {/*    <p className='mb-0'>{t('Account.text2')}</p>*/}
            {/*    <ChevronDown />*/}
            {/*</StatusBlock>*/}

            <UserAvatar>
                <div className='user-avatar-picture col-4'>
                    <img src="/pictures/avatar.jpg" alt="user-avatar" className='w-100 h-100 img-cover'/>
                </div>
                <div className='d-flex col-lg-12 col-8 flex-lg-row flex-md-row flex-column button_group'>
                    <button className={`button button_upload`}>
                        {t('Buttons.account-type-2')}
                    </button>
                    <button className={`button button_remove`}>
                        {t('Buttons.account-type-3')}
                    </button>
                </div>
            </UserAvatar>

            <UserInfo>
                <div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_name mb-0 col-6'>{t('Account.text3')}</p>
                    </div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_value mb-0 col-6'>DemoBank</p>
                    </div>
                </div>
                <div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_name mb-0'>{t('Account.text4')}</p>
                    </div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_value mb-0'>Саша Белый</p>
                    </div>
                </div>
                <div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_name mb-0'>{t('Account.text5')}</p>
                    </div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_value mb-0'>demo@mail.uz</p>
                    </div>
                </div>
                <div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_name mb-0'>{t('Account.text6')}</p>
                    </div>
                    <div className='col-lg-5 col-md-5 col-6'>
                        <p className='field_value mb-0'>+998 00 000 00 00</p>
                    </div>
                </div>
                <Button text={t('Buttons.account-type-1')} disabled={false}
                        className="w-lg-50 w-md-50 w-100 d-block"
                        onClick={()=>logout()}
                        style={{
                                margin: '40px 0 20px auto',
                                fontSize: '14px',
                                fontWeight: 700
                        }}/>
            </UserInfo>


        </UserCardWrap>
    )
}
