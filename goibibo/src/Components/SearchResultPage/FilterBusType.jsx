import React, { useState } from "react";
import styles from "./FilterBusType.module.css"

function FilterBusType() {
    const [busTypeFilter, setBusTypeFilter] = useState(null)

    const items = [
        {id : 1, name : "AC", checked_img : "https://i.imgur.com/EaAbAm7.jpg", unChecked_img : "https://i.imgur.com/X6bWoXA.jpg", status: false},
        {id : 2, name : "Non-AC", checked_img : "https://i.imgur.com/q6C0g8D.jpg", unChecked_img : "https://i.imgur.com/q7zPPyv.jpg", status: false},
        {id : 3, name : "Seater", checked_img : "https://i.imgur.com/PS596Df.jpg", unChecked_img : "https://i.imgur.com/d4HuvJh.jpg", status: false},
        {id : 4, name : "Sleeper", checked_img : "https://i.imgur.com/M5POH6U.jpg", unChecked_img : "https://i.imgur.com/L0g8bNF.jpg", status: false},
    ]

    const [item, setItem] = useState(items)

    const handleCheck = (id) => {
        const updatedItems = item.map(item => item.id === id ? {...item, status : !item.status} : item)

        setItem(updatedItems)
    }
    return (
        <div className={styles.bus_type_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Bus Type</div>
                {busTypeFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.items_wrapper}>
                {item.map(item => item.status ? <div key={item.id} onClick={() => handleCheck(item.id)}> <img src={item.checked_img} alt="filter_image" style={{width:"100%", height:"110%"}} /> </div> : <div key={item.id}> <img src={item.unChecked_img} onClick={() => handleCheck(item.id)} alt="filter_image" style={{height:"110%", width:"100%"}} /> </div>  )}
            </div>
        </div>
    )
}

export {FilterBusType};