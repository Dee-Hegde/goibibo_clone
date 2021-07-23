import React, {useState} from "react";
import styles from "./BoardingFilter.module.css"

function FilterBoarding() {
    const [boardingFilter, setboardingFilter] = useState(null)
    return (
        <div className={styles.boarding_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Boarding Point</div>
                {boardingFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div>
                {/* <input type="text" /> */}
            </div>
        </div>
    )
}

export {FilterBoarding};