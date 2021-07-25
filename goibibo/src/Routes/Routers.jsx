import React from 'react'
import {Switch,Route} from "react-router"
import NavBar from '../Components/Navbar/NavBar'
import {BusPage} from "../Components/Bus/BusPage"
import { Footer } from '../Components/Footer/Footer'
import { BookingPage } from '../Components/Booking page/BookingPage'
import SearchResultMain from '../Components/SearchResultPage/SearchResultMain'
import Confirmed from "../Components/Confirmed.jsx";

function Routers() {
    return (
        <div>
            {/* <NavBar/> */}
            <Switch>

                <Route path="/" exact>
                    <NavBar/>
                 <BusPage/>
                </Route>

                <Route path="/search" exact>
                 <SearchResultMain/>
                </Route>

                <Route path="/booking" exact>
                    
                    <BookingPage></BookingPage>

                </Route>

                <Route path="/confirmed" exact>
                 <Confirmed/>
                </Route>

            </Switch>

        </div>
    )
}

export default Routers
