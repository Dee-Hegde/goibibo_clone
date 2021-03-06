import React, {useState} from "react";
import styles from "./BoardingFilter.module.css"

function FilterBoarding() {
    const [boardingFilter, setboardingFilter] = useState(null)
    const [text, setText] = useState("")
    const [isHide, setIsHide] = useState(false);

    // Kottara, Infosys, Ksrtc, PVS, Pumpwell, Urwa Store, Ladyhill,
    //  PANDITH HOUSE, KUTTAR PADAV, Yenopaya University Gate, Kuloor, Haleyangadi, 
    //  Padupanambur, Hosabettu, Honnakatte, Kulai, BAIKAMPADY, Padupanambur

    // const items_sample = [
    //     {id : 1, name : "Kottara", status : false},
    //     {id : 2, name : "Infosys", status : false},
    //     {id : 3, name : "Ksrtc", status : false},
    // ]

    const items = [
        {id : 1, name : "Kottara", status : false},
        {id : 2, name : "Infosys", status : false},
        {id : 3, name : "Ksrtc", status : false},
        {id : 4, name : "PVS", status : false},
        {id : 5, name : "pumpwell", status : false},
        {id : 6, name : "Urwa Store", status : false},
        {id : 7, name : "Ladyhill", status : false},
        {id : 8, name : "Kuttar Padav", status : false},
        {id : 9, name : "Yenopaya University", status : false},
        {id : 10, name : "Haleyangadi", status : false},
        {id : 11, name : "Padupanambur", status : false},
        {id : 12, name : "Hosabettu", status : false},
        {id : 13, name : "Honnakatte", status : false},
        {id : 14, name : "Pandit House", status : false},
        {id : 15, name : "Kulai", status : false},
        {id : 16, name : "Baikampady", status : false},
        {id : 17, name : "Padupanambur", status : false},
        {id : 18, name : "Kuloor", status : false},
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
        <div className={styles.boarding_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Boarding Point</div>
                {boardingFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.input_wrapper}>
                <input type="text" value={text} placeholder="Enter/Search boarding point" className={styles.search_input} onChange={handleChange}/>
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

export {FilterBoarding};