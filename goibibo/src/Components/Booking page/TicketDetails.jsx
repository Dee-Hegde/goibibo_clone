import React, { useState } from "react";
import styles from "./TicketDetails.module.css"
function TravellerDetails() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const handleUpdateName = (e) => {
       const value = e.target.value
       setName(value);
    }
    const handleUpdateAge = (e) => {
        const value = e.target.value
        setAge(value);
     }
     const handleUpdateEmail = (e) => {
        const value = e.target.value
        setEmail(value);
     }
     const handleUpdateMobile = (e) => {
        const value = e.target.value
        setMobile(value);
     }
    return (
        <>
        <div style={{backgroundColor: "#FFFFFF", width:"793px"}}>
            <div className={styles.traveller_heading}>
                TRAVELLER DETAILS
            </div>
            <div className={styles.traveller_details}>
                <div className={styles.note}>
                    Please make sure you enter the Name as per your Govt. photo id
                </div>
                <div className={styles.heading}>
                    <div>1</div>
                    <div> <img src="https://i.imgur.com/UNmTVgh.jpg" alt="seat_image" style={{width:"100%"}} /> </div>
                    <div>U17</div>
                </div>
                <div className={styles.detail_heading}>
                    <div>Full Name</div>
                    <div>Age</div>
                </div>
                <div className={styles.input_feilds}>
                    <input type="text" placeholder="Enter Name" onChange={handleUpdateName}/>
                    <input type="text" placeholder="Enter Age" onChange={handleUpdateAge}/>
                </div>
            </div>
            <div className={styles.email_mobile_cont}>
                <div className={styles.email_heading}>
                    Email
                </div>
                <input type="text" placeholder="Enter Emaill Address" className={styles.email_input} onChange={handleUpdateEmail}/>
                <div className={styles.email_heading}>
                    Mobile Number
                </div>
                <input type="text" placeholder="Enter Mobile Number" className={styles.email_input} onChange={handleUpdateMobile} />
            </div>
        </div>
        <div className={styles.pay_button}>
            Pay
        </div>
        </>
    )
}
export {TravellerDetails}