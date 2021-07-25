import { StyleRightCont } from "./style/BookingStyle"
import { TravellerDetails } from "./TicketDetails"

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
                    Seats Selected  <spam className="dot">.</spam><spam> 24</spam>
                </div>

            </div>

            <div className="point-details-card">

                <div className="boarding-point Point-detail-content">

                    <h3>Boarding Point Details</h3>
                    <div>11:55 PM, 25th Jul 2021</div>

                    <h2>Mhada Complex</h2>

                    <p>Hans Travels ,43'Rahul Complex,Block 1, Near S.T. Bus Stand ,Nagpur</p>

                </div>

                <div className="dropping-point Point-detail-content">

                    <h3>Dropping Point Details</h3>
                    <div>11:55 PM, 25th Jul 2021</div>

                    <h2>Mhada Complex</h2>

                    <p>Hans Travels ,43'Rahul Complex,Block 1, Near S.T. Bus Stand ,Nagpur</p>

                </div>

            </div>


            <div className="imp-information">
                <img  src="bookingImg1.png" alt="error"/>
            </div>

            <TravellerDetails></TravellerDetails>

        </StyleRightCont>
    )
}
