import styled from "styled-components";

/*----Components----*/
import SideNav from "../components/SideNav";
import UserCard from "../components/UserCard";

const WrapAccount = styled.div`
    margin-top: 80px;
  
  @media screen and (max-width: 992px){
    margin-top: 30px;
  }
`



export default function Account(){
    return(
        <WrapAccount className='d-flex'>
            <div className='col-lg-2'>
                <SideNav />
            </div>

            <div className='col-lg-10 col-12'>
                <UserCard />
            </div>
        </WrapAccount>
    )
}
