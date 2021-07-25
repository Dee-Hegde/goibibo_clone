import { LeftCont } from "./LeftCont"
import { ReviewBox } from "./ReviewBox"
import { RightCont } from "./RightCont"
import { StyleBookingMainCont } from "./style/BookingStyle";
import {useSelector} from "react-redux";

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
        </>
    )
}
