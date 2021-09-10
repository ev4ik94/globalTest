import styled, {css} from 'styled-components'
import {NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

/*------Constants Style----*/
import {color_black} from "../constants";

const TitleNav = styled.h1`
  font-size: 24px;
  color: ${color_black};
  font-weight: 700;
`

const LinkNav = styled.p`
  color: ${color_black};
  opacity: .4;
  font-size: 18px;
  font-weight: bold;
  padding: 2px 14px;
  margin: 15px 0px;
  ${props =>
          props.active && css `
              opacity: 1;
              background-color: #8f73ff1c;
              border-radius: 50px;
            `
  }
`

export default function SideNav(){
    let location = useLocation()
    const {t} = useTranslation()
    return(
        <div>
            <TitleNav>Настройки</TitleNav>
            <ul className='mb-0 px-0' style={{marginTop: '50px'}}>
                <li>
                    <NavLink  to={'/'} >
                        <LinkNav className='mb-0' active={location.pathname==='/'}>{t('SideNav.links1')}</LinkNav>
                    </NavLink >
                </li>
                <li>
                    <NavLink  to={'/password'}>
                        <LinkNav className='mb-0' active={location.pathname==='/password'}>{t('SideNav.links2')}</LinkNav>
                    </NavLink >
                </li>
            </ul>
        </div>
    )
}
