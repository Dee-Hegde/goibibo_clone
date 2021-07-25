import { LeftCont } from "./LeftCont"
import { ReviewBox } from "./ReviewBox"
import { RightCont } from "./RightCont"
import { StyleBookingMainCont } from "./style/BookingStyle"
import {Footer} from "../Footer/Footer"

export const BookingPage = () => {
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
