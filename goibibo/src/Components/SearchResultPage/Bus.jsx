import React, { useEffect, useState } from "react";
import styles from "./Bus.module.css"
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSeats, updateBus } from "../../redux/SearchResult/action";

function Bus({_id, company, destination_t, duration, source_t, seats, type, source_l, destination_l, rating, boarding_point, dropping_point, amenities}) {
    const [isHide, setisHide] = useState(false);

    console.log("_id", _id);

    const handleToggleIsHide = () => {
        setisHide(!isHide);
        heading[0].status = true
        heading[1].status = false
        heading[2].status = false
        heading[3].status = false
    }

    const handleToggleBoardingAndDropping = () => {
        setisHide(!isHide)
        heading[0].status = false
        heading[1].status = false
        heading[2].status = false
        heading[3].status = true
    }

    const handleToggleAmenities = () => {
        setisHide(!isHide)
        heading[0].status = false
        heading[1].status = true
        heading[2].status = false
        heading[3].status = false
    }

    const handleToggleSelectSeat = (id) => {
        const updatedHeading = heading.map(item => item.id === id ? {...item, status : true} : {...item, status : false})

        setHeading(updatedHeading);
        // heading[0].status = true
        // heading[1].status = false
        // heading[2].status = false
        // heading[3].status = false
    }

    const handleToggleAmenities2 = (id) => {
        const updatedHeading = heading.map(item => item.id === id ? {...item, status : true} : {...item, status : false})

        setHeading(updatedHeading);
        // heading[0].status = false
        // heading[1].status = true
        // heading[2].status = false
        // heading[3].status = false
    }

    const handleTogglePolicies = (id) => {
        const updatedHeading = heading.map(item => item.id === id ? {...item, status : true} : {...item, status : false})

        setHeading(updatedHeading);
        // heading[0].status = false
        // heading[1].status = false
        // heading[2].status = true
        // heading[3].status = false
    }

    const handleToggleBoardingDropping = (id) => {
        const updatedHeading = heading.map(item => item.id === id ? {...item, status : true} : {...item, status : false})

        setHeading(updatedHeading);
        // heading[0].status = false
        // heading[1].status = false
        // heading[2].status = false
        // heading[3].status = true
    }

    let count = 0
    for (var i = 0; i < seats.length; i++) {
        if (seats[i].status === false) {
            count++
        }
    }

    let types = ""

    for (var i = 0; i < type.length; i++) {
        if (type[i] === "non-ac" && i + 1 == type.length) {
            types = types + "NON A/C"
        } else if (type[i] === "non-ac") {
            types = types + "NON A/C | "
        }

        if (type[i] === "seater" && i + 1 == type.length) {
            types = types + "Seater / Sleeper (2+1)"
        } else if (types[i] === "seater") {
            types = types + "Seater | "
        }

        if (type[i] == "sleeper" && i + 1 == type.length) {
            types = types + "Sleeper (2+1)"
        } else if (types[i] == "sleeper") {
            types = types + "Sleeper (2+1) | "
        }
    }

    let total_amenities = ""
    for (let i = 0; i < amenities.length; i++) {
        // if (i + 1 == type.length) {
        //     total_amenities = total_amenities + amenities[i]
        // } else {
        //     total_amenities = total_amenities + `${amenities[i]} ${` `} | ${` `}`
        // }

        total_amenities = total_amenities + `${amenities[i]} ${` `} | ${` `}`
    }

    let price = seats[0].cost;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i].cost  < price) {
            price = seats[i].cost
        }
    }

    const headings = [
        {id : 1, name : "SELECT SEATS", status : false, fun : handleToggleSelectSeat},
        {id : 2, name : "AMENITIES AND PHOTOS", status : true, fun : handleToggleAmenities2},
        {id : 3, name : "POLICIES", status : false, fun : handleTogglePolicies},
        {id : 4, name : "BOARDING AND DROPPING", status : false, fun : handleToggleBoardingDropping}
    ]

    const [heading, setHeading] = useState(headings)

    const boarding_points = boarding_point.map(item => {
        return {...item, status : false}
    })

    const [bPoints, setBPoints] = useState(boarding_points)

    const handleToggleBPoints = (time) => {
        const updatedBPoints = bPoints.map((item) => item.time === time ? {...item, status : !item.status} : item)

        setBPoints(updatedBPoints);
    }

    const dropping_points = dropping_point.map(item => {
        return {...item, status : false}
    })

    const [dPoints, setDPoints] = useState(dropping_points)

    const handleToggleDPoints = (time) => {
        const updatedDPoints = dPoints.map((item) => item.time === time ? {...item, status : !item.status} : item)

        setDPoints(updatedDPoints);
    }

    // console.log(boarding_points)
    // console.log(boarding_points)

    const [seatsArray, setSeatsArray] = useState(seats)
    // const [upperRightSeats, setUpperRightSeats] = useState([]);
    // const [upperMiddleSeats, setUpperMiddleSeats] = useState([]);
    // const [upperLeftSeats, setUpperLeftSeats] = useState([]);

    // const [lowerRightSeats, setLowerRightSeats] = useState([]);
    // const [lowerMiddleSeats, setLowerMiddleSeats] = useState([]);
    // const [lowerLeftSeats, setLowerLeftSeats] = useState([]);

    // const [seaterSeats, setSeaterSeats] = useState([]);
    let upperRightSeats = [];
    let upperMiddleSeats = [];
    let upperLeftSeats = [];

    let lowerRightSeats = [];
    let lowerMiddleSeats = [];
    let lowerLeftSeats = [];

    let seaterSeats = [];

    for (var i = 0; i < seatsArray.length; i++) {
        if (seatsArray[i].pos[0] === "A") {
            // setSeaterSeats([...seaterSeats, seatsArray[i]])
            seaterSeats.push({...seatsArray[i], isSelected : false})
        }
    }

    const [selectedUpperTopSeats, setSelectedUpperTopSeats] = useState([]);
    const [selectedUpperMiddleSeats, setSelectedUpperMiddleSeats] = useState([]);
    const [selectedUpperBottomSeats, setSelectedUpperBottomSeats] = useState([]);
    const [selectedLowerTopSeats, setSelectedLowerTopSeats] = useState([]);
    const [selectedLowerMiddleSeats, setSelectedLowerMiddleSeats] = useState([]);
    const [selectedLowerBottomSeats, setSelectedLowerBottomSeats] = useState([]);
    const [selectedSeaterSeats, setSelectedSeaterSeats] = useState([]);

    const [totalSelectedSeats, setTotalSelectedSeats] = useState([]);



    const [upperTopRow, setUpperTopRow] = useState(upperRightSeats);
    const [upperMiddleRow, setUpperMiddleRow] = useState(upperMiddleSeats);
    const [upperBottomRow, setUpperBottomRow] = useState(upperLeftSeats);

    const [lowerTopRow, setLowerTopRow] = useState(lowerRightSeats);
    const [lowerMiddleRow, setLowerMiddleRow] = useState(lowerMiddleSeats);
    const [lowerBottomRow, setLowerBottomRow] = useState(lowerLeftSeats);
    const [seaterSeatsRow, setSeaterSeatsRow] = useState(seaterSeats);

    const handleUpdateUpperRight = (pos) => {
        const updatedSeats = upperTopRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setUpperTopRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedUpperTopSeats(updateSelectedSeats);
    }

    console.log(totalSelectedSeats);
    const handleUpdateUpperMiddle = (pos) => {
        const updatedSeats = upperMiddleRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setUpperMiddleRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedUpperMiddleSeats(updateSelectedSeats);
    }

    const handleUpdateUpperBottom = (pos) => {
        const updatedSeats = upperBottomRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setUpperBottomRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedUpperBottomSeats(updateSelectedSeats);
    }

    const handleUpdateLowerTop = (pos) => {
        const updatedSeats = lowerTopRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setLowerTopRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedLowerTopSeats(updateSelectedSeats);
    }

    const handleUpdateLowerMiddle = (pos) => {
        const updatedSeats = lowerMiddleRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setLowerMiddleRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedLowerMiddleSeats(updateSelectedSeats);
    }

    const handleUpdateLowerBottom = (pos) => {
        const updatedSeats = lowerBottomRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setLowerBottomRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedLowerBottomSeats(updateSelectedSeats);
    }

    const handleUpdateSeaterSeats = (pos) => {
        const updatedSeats = seaterSeatsRow.map((item) => item.pos === pos ? {...item, isSelected : !item.isSelected} : item)

        setSeaterSeatsRow(updatedSeats);

        const updateSelectedSeats = updatedSeats.filter(item => item.isSelected === true);

        setSelectedSeaterSeats(updateSelectedSeats);
    }

    let total_Selected_Seats = "";
    let total_price = 0;

    for(let i = 0; i < totalSelectedSeats.length; i++) {
        if (i + 1 == totalSelectedSeats.length) {
            total_Selected_Seats = total_Selected_Seats + totalSelectedSeats[i].pos
        } else {
            total_Selected_Seats = total_Selected_Seats + `${totalSelectedSeats[i].pos},`
        }

        total_price = total_price + totalSelectedSeats[i].cost
    }

    const mydata = useSelector(state => state.results.data);
    const dispatch = useDispatch();

    const handleSeats = (id)=>{
        const busid = mydata?.data?.filter(item => item._id==id);
        console.log("busid", busid[0]._id);
        dispatch(getSelectedSeats(totalSelectedSeats));
        dispatch(updateBus(busid[0]._id));
    }



    useEffect(() => {
        setTotalSelectedSeats([...selectedUpperTopSeats, ...selectedUpperMiddleSeats, ...selectedUpperBottomSeats, ...selectedLowerTopSeats, ...selectedLowerMiddleSeats, ...selectedLowerBottomSeats, ...selectedSeaterSeats])

    }, [selectedUpperTopSeats, selectedUpperMiddleSeats, selectedUpperBottomSeats, selectedLowerTopSeats, selectedLowerMiddleSeats, selectedLowerBottomSeats, selectedSeaterSeats])

    for (let i = 0; i < seatsArray.length; i++) {
        if (seatsArray[i].pos === "U3" || seatsArray[i].pos === "U4" || seatsArray[i].pos === "U9" || seatsArray[i].pos === "U10" || seatsArray[i].pos === "U15" ) {
            // setUpperRightSeats([...upperRightSeats, seatsArray[i]])
            upperRightSeats.push({...seatsArray[i], isSelected : false})
        } else if (seatsArray[i].pos === "U2" || seatsArray[i].pos === "U5" || seatsArray[i].pos === "U8" || seatsArray[i].pos === "U11" || seatsArray[i].pos === "U14" ) {
            // setUpperMiddleSeats([...upperMiddleSeats, seatsArray[i]])
            upperMiddleSeats.push({...seatsArray[i], isSelected : false})
        } else if (seatsArray[i].pos === "U1" || seatsArray[i].pos === "U6" || seatsArray[i].pos === "U7" || seatsArray[i].pos === "U12" || seatsArray[i].pos === "U13" ) {
            // setUpperLeftSeats([...upperLeftSeats, seatsArray[i]])
            upperLeftSeats.push({...seatsArray[i], isSelected : false})
        } else if ((seatsArray[i].pos === "L2" || seatsArray[i].pos === "L4" || seatsArray[i].pos === "L6" || seatsArray[i].pos === "L8" || seatsArray[i].pos === "L10" ) && (type[2] === "seater") && (seaterSeats.length > 1) ) {
            // setLowerRightSeats([...lowerRightSeats, seatsArray[i]])
            lowerRightSeats.push({...seatsArray[i], isSelected : false})
        } else if ((seatsArray[i].pos === "L1" || seatsArray[i].pos === "L3" || seatsArray[i].pos === "L5" || seatsArray[i].pos === "L7" || seatsArray[i].pos === "L9" ) && (type[2] === "seater") && (seaterSeats.length > 1) ) {
            // setLowerMiddleSeats([...lowerMiddleSeats, seatsArray[i]])
            lowerMiddleSeats.push({...seatsArray[i], isSelected : false})
        } else if (seatsArray[i].pos === "L1" || seatsArray[i].pos === "L6" || seatsArray[i].pos === "L7" || seatsArray[i].pos === "L12" || seatsArray[i].pos === "L13" ) {
            // setLowerRightSeats([...lowerRightSeats, seatsArray[i]])
            lowerRightSeats.push({...seatsArray[i], isSelected : false})
        } else if (seatsArray[i].pos === "L2" || seatsArray[i].pos === "L5" || seatsArray[i].pos === "L8" || seatsArray[i].pos === "L11" || seatsArray[i].pos === "L14" ) {
            // setLowerMiddleSeats([...lowerMiddleSeats, seatsArray[i]])
            lowerMiddleSeats.push({...seatsArray[i], isSelected : false})
        } else if (seatsArray[i].pos === "L3" || seatsArray[i].pos === "L4" || seatsArray[i].pos === "L9" || seatsArray[i].pos === "L10" || seatsArray[i].pos === "L15" ) {
            // setLowerLeftSeats([...lowerLeftSeats, seatsArray[i]])
            lowerLeftSeats.push({...seatsArray[i], isSelected : false})
        }
    }

    console.log({
        company : company,
        upperRightSeats : upperRightSeats,
        upperMiddleSeats : upperMiddleSeats,
        upperLeftSeats : upperLeftSeats,
        lowerRightSeats : lowerRightSeats,
        lowerMiddleSeats: lowerMiddleSeats,
        lowerLeftSeats : lowerLeftSeats,
        seaterSeats : seaterSeats
    })

    return(
        <div className={styles.bus_main}>
            <div className={styles.bus_details}>
                <div className={styles.arrival_date}>26th Jul</div>
                <div className={styles.name_timings}>
                    <div className={styles.name}>{company}</div>
                    <div className={styles.departure}>{source_t}</div>
                    <div className={styles.diff_time}>{duration}</div>
                    <div className={styles.arrival_time}>{destination_t}</div>
                    <div className={styles.amount}>{`₹ ${price}`}</div>
                    
                    <div className={styles.total_seats_left}>{`Total ${count} seats left`}</div>
                </div>
                <div className={styles.type_from_to}>
                    <div className={styles.seat_type}>{types}</div>
                    <div className={styles.from}>{source_l}</div>
                    <div className={styles.to}>{destination_l}</div>
                </div>
                <div className={styles.rating_button}>
                    <div className={styles.rating_main}>
                        <div className={styles.rating}>{`${rating}/5`}</div>
                        <div className={styles.rating_title}>Rating</div>
                    </div>
                    <div className={styles.select_seat_button} onClick={handleToggleIsHide}>{isHide ? "HIDE SEAT" : "SELECT SEAT"}</div>
                </div>
            </div>
            <div className={styles.option_bar}>
                <div className={styles.live_tracking}> <img src="https://i.imgur.com/aL6319O.jpg" alt="live_tracking_logo" style={isHide ? {width:"115%"} : {width:"225%"}} /> </div>
                {!isHide ? <div className={styles.options}>
                    <div className={styles.option_1} onClick={handleToggleBoardingAndDropping}>{`Boarding & Dropping Points`}</div>
                    <div className={styles.option_2} onClick={handleToggleAmenities}>{`Amenities, Policies & Bus Details ▼`}</div>
                </div> : <div className={styles.option_3} onClick={handleToggleIsHide}>{`Hide Details ▲`}</div> }
            </div>
            {isHide && <div className={styles.menus}>
                <div className={styles.heading_bar}>
                    {heading.map((item) => item.status ? <div className={styles.selected_heading} key={item.id}>{item.name}</div> : <div className={styles.heading} key={item.id} onClick={() => item.fun(item.id)}>{item.name}</div>)}
                </div>  
                {heading[0].status ? <div className={styles.select_seat}>
                    <div className={styles.boarding_dropping_selection}>
                        <div className={styles.boarding_selection_heading}>
                            <div>1</div>
                            <div>Select boarding and dropping point</div>
                        </div>
                        <div className={styles.point_header}>
                            <div>Boarding Point</div>
                            <div>Dropping Point</div>
                        </div>
                        <div className={styles.point_listing}>
                            <div>
                                {bPoints.map((item, i) => item.status ? <div className={styles.point} onClick={() => handleToggleBPoints(item.time)}>
                                    <div> <img src="https://i.imgur.com/awAVR41.jpg" alt="round_checked" style={{width:"100%"}}/> </div>
                                    <div className={styles.point_info}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>
                                </div> : <div className={styles.point2} onClick={() => handleToggleBPoints(item.time)} >
                                    <div> <img src="https://i.imgur.com/lyoxZDk.jpg" alt="round_unchecked" style={{width:"100%"}}/> </div>
                                    <div className={styles.point_info}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>
                                </div> )}
                            </div>
                            <div>
                            {dPoints.map((item, i) => item.status ? <div className={styles.point} onClick={() => handleToggleDPoints(item.time)}>
                                    <div> <img src="https://i.imgur.com/awAVR41.jpg" alt="round_checked" style={{width:"100%"}}/> </div>
                                    <div className={styles.point_info}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>
                                </div> : <div className={styles.point2} onClick={() => handleToggleDPoints(item.time)} >
                                    <div> <img src="https://i.imgur.com/lyoxZDk.jpg" alt="round_unchecked" style={{width:"100%"}}/> </div>
                                    <div className={styles.point_info}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>
                                </div> )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.seat_selection}>
                    <div className={styles.boarding_selection_heading}>
                            <div>2</div>
                            <div>Select your seat</div>
                        </div>
                        <div className={styles.seat_instructions}>
                            <div className={styles.booked_seat_logo}></div>
                            <div className={styles.seat_title}>Booked</div>
                            <div className={styles.available_seat_logo}></div>
                            <div className={styles.seat_title}>Available</div>
                            <div className={styles.ladies_seat_logo}></div>
                            <div className={styles.seat_title}>Ladies</div>
                            <div className={styles.men_seat_logo}></div>
                            <div className={styles.seat_title}>Men</div>
                        </div>
                        <div className={styles.upper_seats_cont}>
                            <div> <img src="https://i.imgur.com/HsSEdos.jpg" alt="upper_logo" style={{height:"100%"}} /> </div>
                            <div>
                                <div className={styles.upper_right_seats_cont}>
                                    {upperTopRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperRight(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperRight(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div>
                                <div className={styles.upper_middle_seats_cont}>
                                    {upperMiddleRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperMiddle(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperMiddle(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div>
                                <div className={styles.upper_left_seats_cont}>
                                    {upperBottomRow.map((item, i) => item.status ? <div  className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div  className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperBottom(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div  className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateUpperBottom(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.upper_seats_cont}>
                            <div> <img src="https://i.imgur.com/zc8HkZG.jpg" alt="upper_logo" style={{height:"100%"}} /> </div>
                            <div>
                                <div className={styles.upper_right_seats_cont}>
                                    {lowerTopRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerTop(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerTop(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div>
                                <div className={styles.upper_middle_seats_cont}>
                                    {lowerMiddleRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerMiddle(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerMiddle(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div>
                                {seaterSeatsRow.length > 1 ? <div className={styles.seater_cont}> 
                                {seaterSeatsRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/xw5M0Ju.jpg" alt="booked_seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateSeaterSeats(item.pos)}> <img src="https://i.imgur.com/tjr8lX2.jpg" alt="Not_booked_Seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> : <div className={styles.upper_left_seats_cont_item}  onClick={() => handleUpdateSeaterSeats(item.pos)}> <img src="https://i.imgur.com/g3gSHgF.jpg" alt="Selected_seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div> </div> )}
                                </div> : <div className={styles.upper_left_seats_cont}>
                                    {lowerBottomRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/AZXaA5o.jpg" alt="booked_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerBottom(item.pos)}> <img src="https://i.imgur.com/6HRmrLQ.jpg" alt="Not_booked" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> : <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateLowerBottom(item.pos)}> <img src="https://i.imgur.com/7qE3zFe.jpg" alt="Selected_seat" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> )}
                                </div> }
                                {seaterSeatsRow.length === 1 && <div className={styles.seater_cont_one}> 
                                {seaterSeatsRow.map((item, i) => item.status ? <div className={styles.upper_left_seats_cont_item}> <img src="https://i.imgur.com/xw5M0Ju.jpg" alt="booked_seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> : !item.status && !item.isSelected ? <div className={styles.upper_left_seats_cont_item} onClick={() => handleUpdateSeaterSeats(item.pos)}> <img src="https://i.imgur.com/tjr8lX2.jpg" alt="Not_booked_Seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> : <div className={styles.upper_left_seats_cont_item}  onClick={() => handleUpdateSeaterSeats(item.pos)}> <img src="https://i.imgur.com/g3gSHgF.jpg" alt="Selected_seater" style={{width:"100%"}}/> <div className={styles.hover_detail}> <div>{item.pos}</div> <div>{`₹${item.cost}`}</div> </div>  </div> )}
                                </div>}
                            </div>
                        </div>
                        {totalSelectedSeats.length > 0 ? <Link to="/booking"><div onClick={()=>handleSeats(_id)} className={styles.continue_button}>CONTINUE</div></Link>   :  <div className={styles.continue_button_disable}>SELECT SEATS TO PROCEED</div> }
                        {totalSelectedSeats.length > 0 && <> <div className={styles.seat_selected_price}>
                        <div>Seat selected</div>
                        <div>{`₹${total_price}`}</div> 
                        </div>
                        <div className={styles.seats_selected}>{total_Selected_Seats}</div>
                     </>}
                    </div>
                    
                </div> : heading[1].status ? <div className={styles.amenities_option}>
                    <div className={styles.amenities_heading}>Amenities</div>
                    <div className={styles.amenities}>{total_amenities}</div>
                    <div className={styles.amenities_heading}>Photos</div>
                    <div className={styles.amenities_photos}>Sorry..! Photos are not available at the moment</div>
                </div> : heading[2].status ? <div className={styles.policies_option}>
                    <div className={styles.policies_note}>*Partial cancellation is not allowed.</div>
                    <div className={styles.time_cancellation_heading}>
                        <div>Time Slab</div>
                        <div>Cancellation Charges</div>
                    </div>
                    <div className={styles.time_cancellation_content}>
                        <div>Until 25th Jul 11 : 00 PM</div>
                        <div>{`Rs. ${price}`}</div>
                    </div>
                    <div className={styles.cancellation_note}>Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by Goibibo. Goibibo does not levy any cancellation charges.</div>
                    <div className={styles.other_information}> <img src="https://i.imgur.com/tfY12vY.jpg" alt="other_information" style={{width:"100%"}}/> </div>
                </div> : heading[3].status ? <div className={styles.boarding_dropping_option}>
                    <div className={styles.boarding_dropping_option_heading}>
                        <div className={styles.boarding_options}>Boarding Points</div>
                        <div className={styles.dropping_options}>Dropping Points</div>
                    </div>
                    <div className={styles.boarding_dropping_div_cont}>
                        <div>
                            {bPoints.map((item, i) => <div className={styles.point_info_2}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>)}
                        </div>
                        <div>
                        {dPoints.map((item, i) => <div className={styles.point_info_2}>
                                        <div>{item.time}</div>
                                        <div>{item.point}</div>
                                        <div>{item.info}</div>
                                    </div>)}
                        </div>
                    </div>
                </div> : "" }
            </div>}
        </div>
    )
}

export {Bus};