import {Switch,Route} from "react-router-dom";



/*-----Pages----*/
import Authentication from "./Authentication";
import Account from "./Account";
import Password from './Password';
import Transaction from './Transaction';

export default function Routing(){

    return(
        <Switch>

            <Route path="/authentication">
                <Authentication />
            </Route>


            <Route path="/" exact>
                <Account />
            </Route>


            <Route path="/password">
                <Password />
            </Route>

            <Route path="/transactions">
                <Transaction />
            </Route>

        </Switch>
    )
}
