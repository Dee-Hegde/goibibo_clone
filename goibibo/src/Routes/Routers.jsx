import React from 'react'
import {Switch,Route} from "react-router"
import LandingPage from '../Components/LandingPage/LandingPage'
import NavBar from '../Components/Navbar/NavBar'
import { BusPage } from '../Components/Bus/BusPage'

function Routers() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <LandingPage/>
                </Route>

                <Route path="/bus" exact>
                   <BusPage />
                </Route>

            </Switch>
            
        </div>
    )
}

export default Routers
