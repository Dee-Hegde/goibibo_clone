import React from 'react'
import flights from "./Images/flights.png"
import flights1 from "./Images/flights1.png"
import hotel from "./Images/hotel.png"
import hotel1 from "./Images/hotel1.png"
import train from "./Images/train.png"
import train1 from "./Images/train1.png"
import cab from "./Images/cab.png"
import cab1 from "./Images/cab1.png"
import bus from "./Images/bus.png"
import bus1 from "./Images/bus1.png"
import Styles from "./Navbar.module.css"
import { useHistory } from "react-router-dom";



function NavBarLinks({flightState,setFlightState,
    hotelState,setHotelState,
    trainState,setTrainState,
    cabState,setCabState,
    busState,setBusState
}) {

    let history = useHistory();
    


    return (
        <div className={Styles.linkmain}>
           <div onClick={()=>{setFlightState(true);
            setHotelState(false);
            setTrainState(false);
            setCabState(false);
            setBusState(false);
            history.push("/flights")}} 
            className={flightState? Styles.tlinkdiv:Styles.linkdiv}>
                <img src={flightState? flights1 : flights} alt="" />
                <p>Flights</p>
            </div>
            <div onClick={()=>{setFlightState(false);
                setHotelState(true);
                setTrainState(false);
                setCabState(false);
                setBusState(false);
                history.push("/hotel")}}
                className={hotelState? Styles.tlinkdiv:Styles.linkdiv}>
                <img src={hotelState? hotel1 : hotel} alt="" />
                <p>hotels</p>
            </div>
            <div onClick={()=>{setFlightState(false);
                setHotelState(false);
                setTrainState(true);
                setCabState(false);
                setBusState(false);
                history.push("/train")}}
                className={trainState? Styles.tlinkdiv:Styles.linkdiv}>
                <img src={trainState? train1 : train} alt="" />
                <p>Trains</p>
            </div>
            <div onClick={()=>{setFlightState(false);
                setHotelState(false);
                setTrainState(false);
                setCabState(true);
                setBusState(false);
                history.push("/cab")}}
                className={cabState? Styles.tlinkdiv:Styles.linkdiv}>
                <img src={cabState? cab1 : cab} alt="" />
                <p >Cabs</p>
            </div>
            <div onClick={()=>{setFlightState(false);
                setHotelState(false);
                setTrainState(false);
                setCabState(false);
                setBusState(true);
                history.push("/bus")}}
                className={busState? Styles.tlinkdivbus:Styles.linkdivbus}>
                <img src={busState? bus1 : bus} alt="" />
                <p >Bus</p>
            </div>
        </div>
    )
}

export default NavBarLinks
