
/*----Components----*/
import SideNav from "../components/SideNav";
import PasswordCard from "../components/PasswordCard";

export default function Password(){
    return(
        <div className='d-flex' style={{marginTop: '80px'}}>
            <div className='col-lg-2'>
                <SideNav />
            </div>

            <div className='col-lg-10'>
                <PasswordCard />
            </div>
        </div>
    )
}
