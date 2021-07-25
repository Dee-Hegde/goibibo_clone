import { LeftCont } from "./LeftCont"
import { ReviewBox } from "./ReviewBox"
import { RightCont } from "./RightCont"
import { StyleBookingMainCont } from "./style/BookingStyle"

export const BookingPage = () => {
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
