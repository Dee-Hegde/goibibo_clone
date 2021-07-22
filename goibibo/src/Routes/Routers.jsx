import React from 'react'
import {Switch,Route} from "react-router"
import NavBar from '../Components/Navbar/NavBar'
import {BusPage} from "../Components/Bus/BusPage"

function Routers() {
    return (
        <div>
            <NavBar/>
            <Switch>

                <Route path="/bus" exact>
                 <BusPage/>
                </Route>

            </Switch>
            
        </div>
    )
}

export default Routers
