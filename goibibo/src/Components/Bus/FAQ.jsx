import { StyleFAQCont } from "./Style/BusStyle"

export const FAQ = () => {

    const Data = [

        {
            "question":"What are the advantages of online bus booking?",
            "answer":"There are many advantages of online bus ticket booking.You can choose your preferred seats.Online bus ticket booking keeps you away from the long queues of the offline ticket counters.You can view plenty of buses and choose an appropriate bus for your travel considering the amenities, reviews, ratings and bus images available.You can choose the preferred bus type (Volvo Bus, AC or Non AC) and also pickup and dropping point and timings.Your tickets can be booked at a reasonable price with the ongoing bank and e-wallet discounts.",
        },


        {
            "question":"Can we book state road transport corporation buses from Goibibo?",
            "answer":"Yes, almost all fleets of state road transport corporation buses can be booked from Goibibo. For example, Deluxe AC and Non Ac buses and Volvo bus booking.",
        },


        {
            "question": "Is it compulsory to carry the printout of the ticket to board the bus?",
            "answer":"The bus operators validate e-tickets received on your e-mail, Whatsapp or available on the Goibibo app. But, it is advisable to carry the e-ticket's print out to be on a safer side for a hassle-free travel experience.",
        },


        {
            "question": "What if I miss the bus? Will I get a refund?",
            "answer":"Refund will not be initiated if you miss the bus. A refund is initiated in case of bus operator cancels the bus and have not provided any other bus as an alternate option. Please note that Goibibo will not be liable for refund as it can be permitted only by the bus operators.",
        },


        {
            "question": "How to book bus tickets online through Goibibo?",
            "answer":"Browse the Goibibo website or mobile app, go to the Bus section, enter the to and from city name and the journey date. The results displayed will bring forth various bus options. You can apply filters as per your travel preferences, like bus timings, boarding or dropping points, bus operators, bus type (Volvo Bus, AC or Non AC Bus). After deciding the bus, you can also select the seat as per your choice. After selecting the seat you must select the pickup and dropping point before confirming the booking. Enter the traveller detail on the booking confirmation page.  You can also check the current offers and promo codes available on the booking and also redeem GoCash if any. You can protect your journey with Travel Insurance policy. After confirming all the details pay the final amount through payment options like Credit/Debit cards, Netbanking or e-Wallets.",
        },


        {
            "question": "Where can I check current offers on online bus booking via Goibibo?",
            "answer":"The exciting discounts and offers come with validity, hence, you must check the current offers before booking bus tickets. The exclusive bank offers, promo codes and discounts are displayed on the bus page of the website and Bus section on the Goibibo app.",
        }
    ]



    return (

        <div style={{ marginTop: "60px" }}>

            <div className="bus-root-header">
                <h1 className="Recent-search-header header">Bus Booking FAQ</h1>
            </div>

            <StyleFAQCont>

                {Data.map((el) => {
                    return <>

                        <div className="Question">
                            <div className="Q-icon">Q</div>
                            <div className="Q-text">
                                {el.question}
                                </div>
                        </div>

                        <div className="answer">
                            <div className="A-icon">A</div>
                            <div className="A-text">
                                <p>
                                {el.answer}
                                </p>
                                </div>
                        </div>

                    </>
                })}


            </StyleFAQCont>
        </div>


    )
}
