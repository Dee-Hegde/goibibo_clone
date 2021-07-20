import React from 'react'
import {Switch,Route} from "react-router"
import LandingPage from '../Components/LandingPage/LandingPage'
import NavBar from '../Components/Navbar/NavBar'

function Routers() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <LandingPage/>
                </Route>

            </Switch>
            
        </div>
    )
}

export default Routers
