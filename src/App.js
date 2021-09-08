import {BrowserRouter} from 'react-router-dom';



import Routing from "./pages/Routing";

function App() {
    return (
        <div className = "container-fluid">
            <BrowserRouter keyLength={12}>
                <Routing />
            </BrowserRouter>
        </div>
    );
}

export default App;
