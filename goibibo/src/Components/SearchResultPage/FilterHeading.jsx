import React, { useState } from "react";
import styles from "./FilterHeading.module.css"

function FilterHeading() {
    const [filters, setFilters] = useState(null);
    return (
        <div className={styles.heading_main}>
            <div className={styles.heading}>Filters</div>
            {filters === null ? <div className={styles.reset_desable}>Reset All</div> : <div className={styles.reset}>Reset All</div> }
        </div>
    )
}

export {FilterHeading}