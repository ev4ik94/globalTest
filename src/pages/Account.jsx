

/*----Components----*/
import SideNav from "../components/SideNav";
import UserCard from "../components/UserCard";



export default function Account(){
    return(
        <div className='d-flex' style={{marginTop: '80px'}}>
            <div className='col-lg-2'>
                <SideNav />
            </div>

            <div className='col-lg-10'>
                <UserCard />
            </div>
        </div>
    )
}
