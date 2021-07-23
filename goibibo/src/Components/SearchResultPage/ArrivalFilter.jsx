import React, { useState } from "react";
import styles from "./ArrivalFilter.module.css"

function FilterArrival() {
    const [arrivalFilter, setArrivalFilter] = useState(null)

    const items = [
        {id : 1, name : "", checked_img : "https://i.imgur.com/tANFo3o.jpg", unChecked_img : "https://i.imgur.com/5JM6SiS.jpg", status: false},
        {id : 2, name : "", checked_img : "https://i.imgur.com/RI5qt6I.jpg", unChecked_img : "https://i.imgur.com/9pOUQ6c.jpg", status: false},
        {id : 3, name : "", checked_img : "https://i.imgur.com/9ZraRp2.jpg", unChecked_img : "https://i.imgur.com/ZBrpiGb.jpg", status: false},
        {id : 4, name : "", checked_img : "https://i.imgur.com/fnb92Ka.jpg", unChecked_img : "https://i.imgur.com/De83VO9.jpg", status: false},
    ]

    const [item, setItem] = useState(items)

    const handleCheck = (id) => {
        const updatedItems = item.map(item => item.id === id ? {...item, status : !item.status} : item)

        setItem(updatedItems)
    }
    return (
        <div className={styles.arrival_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Arrival Time</div>
                {arrivalFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.items_wrapper}>
                {item.map(item => item.status ? <div key={item.id} onClick={() => handleCheck(item.id)}> <img src={item.checked_img} alt="filter_image" style={{width:"100%", height:"110%"}} /> </div> : <div key={item.id}> <img src={item.unChecked_img} onClick={() => handleCheck(item.id)} alt="filter_image" style={{height:"110%", width:"100%"}} /> </div>  )}
            </div>
        </div>
    )
}

export {FilterArrival};