import React,{useState} from 'react'
import NavbarLogo from './NavbarLogo'
import Styles from "./Navbar.module.css"
import NavBarLinks from './NavBarLinks'

function NavBar() {
    const [flightState,setFlightState]=useState(false)
    const [hotelState,setHotelState]=useState(false)
    const [trainState,setTrainState]=useState(false)
    const [cabState,setCabState]=useState(false)
    const [busState,setBusState]=useState(true)
    return (
        <div className={Styles.maindiv}>
            {/* logopage */}
            <NavbarLogo 
            setFlightState={setFlightState} 
            setHotelState={setHotelState}
            setTrainState={setTrainState}
            setCabState={setCabState}
            setBusState={setBusState}/>
            {/* link's page */}
            <NavBarLinks flightState={flightState}
            setFlightState={setFlightState} hotelState={hotelState}
            setHotelState={setHotelState} trainState={trainState}
            setTrainState={setTrainState}
            cabState={cabState} setCabState={setCabState}
            busState={busState} setBusState={setBusState}
            />
            
            
        </div>
    )
}

export default NavBar
