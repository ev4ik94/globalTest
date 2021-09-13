import {useLocation, useHistory} from 'react-router-dom';
import {useEffect, useState} from "react";
import { useIdleTimer } from 'react-idle-timer';
import {Context} from "./context/context";


/*-----Style----*/
import {Container} from "./styles/style-components/Container";


/*-----Hooks----*/
import {useAuth} from "./hooks/authentication.hook";

/*------Components----*/
import Header from "./components/Header";
import Routing from "./pages/Routing";



function App() {

    const {getUserData, logout} = useAuth()
    let location = useLocation();
    let history = useHistory()
    const [timeoutLogout, setTimeoutLogout] = useState(false)

    const handleOnIdle = () => {
       if(getUserData()){
           logout();
           setTimeoutLogout(true)
           console.log('last active', getLastActiveTime())
       }
    }



    const {getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * 10,
        onIdle: handleOnIdle,
        debounce: 500
    })

    useEffect(()=>{
        if(!getUserData()){
            history.push('/authentication')
        }
    }, [location.pathname])

    return (
        <Context.Provider value={{
            timeoutLogout,
            setTimeoutLogout
        }}>
            <div className = "">
                {location.pathname!=='/authentication'?(<Header />):''}
                <Container>
                    <Routing/>
                </Container>
            </div>
        </Context.Provider>
    );
}

export default App;
