import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getData, getUpdatedData } from "../../redux/SearchResult/action";
import { Bus } from "./Bus";
import styles from "./Results.module.css"

function Results() {
    const dispatch = useDispatch();
    const {data, isLoading, isError} = useSelector((state) => state.results);
    const {bus_filters} = useSelector((state) => state.results);
    // console.log(data.data);
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

    useEffect(() => {
        // if (bus_filters.length > 0) {
        //     const updatedData = data.data.filter(item => item.type[1] === bus_filters[0]?.name || item.type[2] === bus_filters[0]?.name || item.type[2] === bus_filters[1]?.name || item.type[1] === bus_filters[1]?.name)

        //     dispatch(getUpdatedData(updatedData));
        // } else {
            dispatch(getData());
        // }
        
    }, [bus_filters])

    return (
        <div className={styles.results_main}>
            <div className={styles.no_of_results}>
                <div>Showing<span>{` ${data.data?.length} buses`}</span></div>
                <div className={styles.next_day}>Next Day</div>
            </div>
            <div className={styles.sort_main}>
                <div className={styles.sort_by}>Sort by:</div>
                {sort.map(item => item.status === false ? <div key={item.id} className={styles.sort} onClick={() => handleSort(item.id)}>{`${item.type}`} <span>↓</span> </div> : item.status === true ? <div key={item.id} className={styles.sort} onClick={() => handleSort(item.id)}>{`${item.type}`} <span>↑</span></div> : item.status === "" ? <div className={styles.sort_empty} key={item.id} onClick={() => handleSort(item.id)}>{item.type}</div> : "" )}
            </div>
            {
                data.data?.map(item => <Bus key={item.id} {...item} />  )
            }
        </div>
    )
}

export {Results};