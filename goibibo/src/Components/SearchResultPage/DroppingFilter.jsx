import React, {useState} from "react";
import styles from "./DroppingFilter.module.css"

function FilterDropping() {
    const [droppingFilter, setDroppingFilter] = useState(null)
    const [text, setText] = useState("")
    const [isHide, setIsHide] = useState(false);

    // 8th Mile Toll, Jalahalli Circle, Goraguntepalya, Yeshwantpur, Parle Toll, Guruguntapalya Signal,
    //  Nelamangala Bypass, Nelamangala, Parle-G, Gangamma Circle, Yashwanthapura

    // const items_sample = [
    //     {id : 1, name : "Kottara", status : false},
    //     {id : 2, name : "Infosys", status : false},
    //     {id : 3, name : "Ksrtc", status : false},
    // ]

    const items = [
        {id : 1, name : "8th Mile Toll", status : false},
        {id : 2, name : "Jalahalli Circle", status : false},
        {id : 3, name : "Goraguntepalya", status : false},
        {id : 4, name : "Yeshwantpur", status : false},
        {id : 5, name : "Parle Toll", status : false},
        {id : 6, name : "Guruguntapalya Signal", status : false},
        {id : 7, name : "Nelamangala Bypass", status : false},
        {id : 8, name : "Nelamangala", status : false},
        {id : 9, name : "Parle-G", status : false},
        {id : 10, name : "Gangamma Circle", status : false},
        {id : 11, name : "Yashwanthapura", status : false},
    ]

    const [item, setItem] = useState(items)

    const handleCheck = (id) => {
        const updatedItems = item.map(item => item.id === id ? {...item, status : !item.status} : item)

        setItem(updatedItems)
    }

    const handleChange = (e) => {
        const value = e.target.value;

        setText(value)
        const lowerCase = value.toLowerCase();

        const updatedItems = items.filter(item => item.name.includes(value) || item.name.includes(lowerCase)
            // if (item.name.includes(value)) {
            //     return item
            // }
            
        )
        console.log(updatedItems)
        setItem([...updatedItems]);
    }

    const handleClearSearch = () => {
        setText("")
        setItem(items);
    }

    const handleHide = () => {
        if (isHide) {
            setIsHide(false)
            // setItem(items_sample)
        } else if (!isHide) {
            setIsHide(true)
            // setItem(items)
        }
    }
    return (
        <div className={styles.dropping_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Dropping Point</div>
                {droppingFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.input_wrapper}>
                <input type="text" value={text} placeholder="Enter/Search dropping point" className={styles.search_input} onChange={handleChange}/>
                <div className={styles.logo_wrapper} >
                    {text === "" ? <img src="https://i.imgur.com/DTZeXlj.jpg" alt="search_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/5YUm9k6.jpg" alt="cancel_logo" style={{width:"100%"}} onClick={handleClearSearch}/> }
                </div>
            </div>
            <div className={styles.partition}>
                
            </div>
             {isHide ? <div className={styles.items_wrapper2}>
                {item.map(item => <div key={item.id} className={styles.item}>
                    <div onClick={() => handleCheck(item.id)}>
                        {item.status ? <img src="https://i.imgur.com/bb5PWj7.jpg" alt="checked_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/QoMsC55.jpg" alt="unchecked_logo" style={{width:"100%"}} /> }
                    </div>
                    <div>{item.name}</div>
                </div> )}
            </div> : <div className={styles.items_wrapper}>
                {item.map((item, i) => i === 0 || i === 1 || i === 2 ? <div key={item.id} className={styles.item}>
                    <div onClick={() => handleCheck(item.id)}>
                        {item.status ? <img src="https://i.imgur.com/bb5PWj7.jpg" alt="checked_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/QoMsC55.jpg" alt="unchecked_logo" style={{width:"100%"}} /> }
                    </div>
                    <div>{item.name}</div>
                </div> : "")}
            </div>} 
            <div className={styles.is_hide} onClick={handleHide}>{!isHide ? `+ Show all boarding points` : `- Show less boarding points`}</div>
        </div>
    )
}

export {FilterDropping};