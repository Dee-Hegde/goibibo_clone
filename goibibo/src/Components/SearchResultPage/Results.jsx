import React, { useState } from "react";
import styles from "./Results.module.css"

function Results() {

    const sorts = [
        {type : "BEST", status : false, id : 1},
        {type : "RATING", status : "", id : 2},
        {type : "DEPARTURE", status : "", id : 3},
        {type : "ARRIVAL", status : "", id : 4},
        {type : "FASTEST", status : "", id : 5},
        {type : "CHEAPEST", status : "", id : 6}
    ]

    const [sort, setSort] = useState(sorts);

    const handleSort = (id) => {
        const updatedSorts = sort.map(item => item.id === id && item.status === "" ? {...item, status : true} : item.id === id && item.status === false ? {...item, status : true} : item.id === id && item.status === true ? {...item, status : false} : {...item, status : ""} )
        
        setSort(updatedSorts)
    }

    return (
        <div className={styles.results_main}>
            <div className={styles.no_of_results}>
                <div>Showing<span> 12 buses</span></div>
                <div className={styles.next_day}>Next Day</div>
            </div>  
            <div className={styles.sort_main}>
                <div className={styles.sort_by}>Sort by:</div>
                {sort.map(item => item.status === false ? <div className={styles.sort} onClick={() => handleSort(item.id)}>{`${item.type}`} <span>↓</span> </div> : item.status === true ? <div className={styles.sort} onClick={() => handleSort(item.id)}>{`${item.type}`} <span>↑</span></div> : item.status === "" ? <div className={styles.sort_empty} onClick={() => handleSort(item.id)}>{item.type}</div> : "" )}
            </div>
        </div>
    )
}

export {Results};