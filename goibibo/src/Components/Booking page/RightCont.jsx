import { StyleRightCont } from "./style/BookingStyle"
import {TravellerDetails} from "./TicketDetails"

export const RightCont = () => {
    return (
        <StyleRightCont>

            <div className="travel-limited">
            <div className="cancell-policy">Cancellation Policy</div>
                <div className="upper-box">
                    <h2>Hans Travels l Private Limited</h2>
                    <spam>NON A/C Sleeper (2+1)</spam>
                </div>

               
                <div className="seat-selected">
                    Seats Selected  <spam>. 24</spam>
                </div>

            </div>

            <div className="point-details-card">
                <div className="boarding-point"></div>
                <div className="dropping-point"></div>
            </div>

            <div>
                <TravellerDetails></TravellerDetails>
            </div>
        </StyleRightCont>
    )
}
