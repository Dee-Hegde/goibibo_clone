import React, { useState } from "react";
import styles from "./FilterPopular.module.css";

function FilterPopular() {
    const [popularFilter, setPopularFilter] = useState(null)

    const items = [
        {id : 1, img : "https://i.imgur.com/xFh91m7.jpg", name : "GoSafe Buses", status : false},
        {id : 2, img : "https://i.imgur.com/NNJlZgE.jpg", name : "Social Distancing Buses", status : false},
        {id : 3, img : "https://i.imgur.com/c3JHOTg.jpg", name : "GoDeal Discount", status : false},
        {id : 4, img : "https://i.imgur.com/Kcz5IDj.jpg", name : "Live Tracking", status : false},  
        {id : 5, img : "https://i.imgur.com/cbs0P8L.jpg", name : "Free Cancellation", status : false},
        {id : 6, img : "https://i.imgur.com/7Z69Lit.jpg", name : "Top Rated Buses", status : false},
    ]

    const [item, setItem] = useState(items)

    const handleCheck = (id) => {
        const updatedItems = item.map(item => item.id === id ? {...item, status : !item.status} : item)

        setItem(updatedItems)
    }
    return (
        <div className={styles.popular_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Popular</div>
                {popularFilter === null ? <div className={styles.reset_desable}>Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.items_wrapper}>
                {
                    item.map(item => <div className={styles.item} key={item.id}>
                        <div onClick={() => handleCheck(item.id)}>
                            {!item.status ? <img src="https://i.imgur.com/pG7Wbex.jpg" alt="check_box" style={{width:"100%"}}/> : <img src="https://i.imgur.com/F2WOT92.jpg" alt="check_box" style={{width:"100%"}}/> }
                            
                        </div>
                        <div onClick={() => handleCheck(item.id)}>
                            <img src={item.img} alt="item_logo" style={{height:"100%"}}/>
                        </div>
                        <div onClick={() => handleCheck(item.id)}>{item.name}</div>
                    </div> )
                }
                {/* <div className={styles.item}>
                    <div>
                        <img src="https://i.imgur.com/pG7Wbex.jpg" alt="check_box" style={{width:"100%"}}/>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/xFh91m7.jpg" alt="item_logo" style={{height:"100%"}}/>
                    </div>
                    <div>GoSafe Buses</div>
                </div> */}
            </div>
        </div>
    )
}

export {FilterPopular};