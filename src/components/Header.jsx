import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

/*-----Style----*/
import {Container} from "../styles/style-components/Container";

/*----Constants -----*/
import {color_grey2} from "../constants";

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

export default function Header(){
    const {t} = useTranslation()
    return(
    <NavBar>
        <Container className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <Link to={'/'}>
                    <Brand>
                        <img src="/icons/logo.svg" alt="Logo" style={{marginLeft: '-30px'}} className='w-100 h-100'/>
                    </Brand>
                </Link>

                <ul className='mb-0'>
                    <li>
                        <Link to={'/transactions'}>
                            <LinkNav className='mb-0'>{t('Header.links1')}</LinkNav>
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <AvatarContainer>
                    <img src="/pictures/avatar.jpg" alt="Avatar" className='w-100 h-100 img-cover'/>
                </AvatarContainer>
            </div>
        </Container>
    </NavBar>
    )
}
