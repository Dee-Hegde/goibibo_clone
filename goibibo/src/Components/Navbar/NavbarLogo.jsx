import React from 'react'
import Styles from "./Navbar.module.css"
import { useHistory } from "react-router-dom";

function NavbarLogo({setHotelState,setFlightState,setTrainState,setCabState, setBusState}) {
    let history = useHistory();
    return (
        <div  className={Styles.logo2}>
           <div onClick={()=>{setFlightState(false);
                setHotelState(false);
                setTrainState(false);
                setCabState(false);
                setBusState(true);
                history.push("/bus")}}  className={Styles.logo}></div>
        </div>
    )
}

export default NavbarLogo
