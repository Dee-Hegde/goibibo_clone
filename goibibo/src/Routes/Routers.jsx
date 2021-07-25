import React from 'react'
import {Switch,Route} from "react-router"
import NavBar from '../Components/Navbar/NavBar'
import {BusPage} from "../Components/Bus/BusPage"
import { Footer } from '../Components/Footer/Footer'
import { BookingPage } from '../Components/Booking page/BookingPage'

function Routers() {
    return (
        <div>
            <NavBar/>
            <Switch>

                <Route path="/" exact>
                 <BusPage/>
                </Route>

                <Route path="/booking" exact>
                    
                    <BookingPage></BookingPage>

                </Route>

            </Switch>

        </div>
    )
}

export default Routers
