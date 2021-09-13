import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import {useLocation} from 'react-router-dom';

/*-----Style----*/
import {Container} from "../styles/style-components/Container";

/*---Icons---*/
import {Settings, UserMob, Clock} from "./icons/Icons-pack";

/*----Constants -----*/
import {color_black, color_grey2, color_purple} from "../constants";

const NavBar = styled.nav`
  padding: 16px 0px;
  background-color: #fff;
  box-shadow: 1px 0px 8px rgb(0, 0, 0, .5);
`

const Brand = styled.div`
  height: 50px;
  width: 200px;
`

const LinkNav = styled.p`
    color: ${color_grey2};
    font-weight: 700;
    font-size: 18px;
`

const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
`

const NavbarBottom = styled.nav`
  height: 56px;
  background-color: #fff;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  
  & > a{
    text-align: center;
    padding: 0px 15px;
    font-size: 12px;
    font-weight: 700;
    opacity: .5;
    color: ${color_black};
    transition: .4s;
    & svg, & svg path{
      fill: ${color_black};
    }
    &:hover{
      opacity: 1;
    }
    &.active{
      color: ${color_purple};
      opacity: 1;
      & svg path{
        fill: ${color_purple};
      }
    }
  }
`

const ButtonSettings = styled.button`
  border: none;
  background-color: transparent;
  outline: none;

  & > svg > path{
    transition: .4s;
  }
  
  &:hover{
    & > svg > path{
      fill: ${color_purple}!important;
    }
  }
`

export default function Header(){
    const {t} = useTranslation()
    const location = useLocation()
    return(
    <NavBar>
        <Container className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <Link to={'/'}>
                    <Brand>
                        <img src="/icons/logo.svg" alt="Logo" style={{marginLeft: '-30px'}} className='w-100 h-100'/>
                    </Brand>
                </Link>

                <ul className='mb-0 d-lg-block d-none'>
                    <li>
                        <Link to={'/transactions'}>
                            <LinkNav className='mb-0'>{t('Header.links1')}</LinkNav>
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <AvatarContainer className='d-lg-block d-none'>
                    <img src="/pictures/avatar.jpg" alt="Avatar" className='w-100 h-100 img-cover'/>
                </AvatarContainer>

                <ButtonSettings className='d-lg-none d-block'>
                    <Settings />
                </ButtonSettings>
            </div>

            <NavbarBottom className='d-lg-none d-flex justify-content-around'>
                <Link to={'/'} className={location.pathname==='/'?'active':''}>
                    <div>
                        <UserMob />
                        <p>{t('SideNav.links1')}</p>
                    </div>
                </Link>
                <Link to={'/transactions'} className={location.pathname==='/transactions'?'active':''}>
                    <div>
                        <Clock />
                        <p>{t('Header.links1')}</p>
                    </div>
                </Link>
            </NavbarBottom>
        </Container>
    </NavBar>
    )
}
