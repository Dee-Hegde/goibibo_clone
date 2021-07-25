import { StyleRightCont } from "./style/BookingStyle"
import { TravellerDetails } from "./TicketDetails"

export const RightCont = () => {
    return (
        <StyleRightCont>

            <div className="travel-limited">
                <div className="cancell-policy">Cancellation Policy</div>
                <div className="upper-box">
                    <h2>Cauvery Travels l Private Limited</h2>
                    <spam>NON A/C Sleeper (2+1)</spam>
                </div>


                <div className="seat-selected">
                    Seats Selected  <spam className="dot">.</spam><spam> U4 U9</spam>
                </div>

            </div>

            <div className="point-details-card">

                <div className="boarding-point Point-detail-content">

                    <h3>Boarding Point Details</h3>
                    <div>11:55 PM, 25th Jul 2021</div>

                    <h2>Kottara</h2>

                    <p>Cauvery Travels ,43'Rahul Complex,Block 1, Near S.T. Bus Stand ,Nagpur</p>

                </div>

                <div className="dropping-point Point-detail-content">

                    <h3>Dropping Point Details</h3>
                    <div>08:55 PM, 26th Jul 2021</div>

                    <h2>Jhalhali Circle</h2>

                    <p>Cauvery Travels ,43'Rahul Complex,Block 1, Near S.T. Bus Stand ,Nagpur</p>

                </div>

            </div>


            <div className="imp-information">
                <img  src="bookingImg1.png" alt="error"/>
            </div>

            <TravellerDetails></TravellerDetails>

        </StyleRightCont>
    )
}
