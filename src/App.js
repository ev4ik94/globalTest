import {useLocation, useHistory} from 'react-router-dom';
import {useEffect} from "react";



/*-----Style----*/
import {Container} from "./styles/style-components/Container";


/*-----Hooks----*/
import {useAuth} from "./hooks/authentication.hook";

/*------Components----*/
import Header from "./components/Header";
import Routing from "./pages/Routing";



function App() {
    const {getUserData} = useAuth()
    let location = useLocation();
    let history = useHistory()

    useEffect(()=>{
        if(!getUserData()){
            history.push('/authentication')
        }
    }, [location.pathname])

    return (
        <div className = "">
            {location.pathname!=='/authentication'?(<Header />):''}
            <Container>
                <Routing />
            </Container>
        </div>
    );
}

export default App;
