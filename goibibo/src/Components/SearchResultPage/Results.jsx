import React from "react";
import styles from "./Results.module.css"

function Results() {

    const sorts = [
        {type : "BEST", status : false},
        {type : "RATING", status : true},
        {type : "DEPARTURE", status : ""},
        {type : "ARRIVAL", status : ""},
        {type : "FASTEST", status : ""},
        {type : "CHEAPEST", status : ""}
    ]

    return (
        <div className={styles.results_main}>
            <div className={styles.no_of_results}>
                <div>Showing<span> 12 buses</span></div>
                <div className={styles.next_day}>Next Day</div>
            </div>  
            <div className={styles.sort_main}>
                <div className={styles.sort_by}>Sort by:</div>
                {sorts.map(item => item.status === false ? <div className={styles.sort}>{`${item.type}`} <span>↓</span> </div> : item.status === true ? <div className={styles.sort}>{`${item.type}`} <span>↑</span></div> : item.status === "" ? <div className={styles.sort_empty}>{item.type}</div> : "" )}
            </div>
        </div>
    )
}

export {Results};