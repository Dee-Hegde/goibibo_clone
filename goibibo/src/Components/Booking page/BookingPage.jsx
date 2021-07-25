import { LeftCont } from "./LeftCont"
import { ReviewBox } from "./ReviewBox"
import { RightCont } from "./RightCont"
<<<<<<< HEAD
import { StyleBookingMainCont } from "./style/BookingStyle";
import {useSelector} from "react-redux";
=======
import { StyleBookingMainCont } from "./style/BookingStyle"
import {Footer} from "../Footer/Footer"
>>>>>>> 2d0963a1c6046648879921a3ac11aac5e52a1558

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
