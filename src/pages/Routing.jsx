import {Switch,Route} from "react-router-dom";


/*-----Pages----*/
import Authentication from "./Authentication";

export default function Routing(){
    return(
        <Switch>

            <Route path="/" exact  >
                <Authentication />
            </Route>

        </Switch>
    )
}
