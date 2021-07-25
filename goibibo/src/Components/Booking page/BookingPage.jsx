import { LeftCont } from "./LeftCont"
import { ReviewBox } from "./ReviewBox"
import { RightCont } from "./RightCont"
import {useSelector} from "react-redux";
import { StyleBookingMainCont } from "./style/BookingStyle"
import {Footer} from "../Footer/Footer"

export const BookingPage = () => {

    const seats = useSelector(state => state.results.seats);
    console.log("seats", seats);

    return (
        <>
        <ReviewBox></ReviewBox>
        
        <StyleBookingMainCont>
            <RightCont></RightCont>
            <LeftCont></LeftCont>

        </StyleBookingMainCont>

       <Footer style={{marginTop:"0%"}}></Footer>
        </>
    )
}
