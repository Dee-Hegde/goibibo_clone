import React, {useState} from "react";
import styles from "./BusOperatorFilter.module.css"

function FilterBusOperator() {
    const [busOperatorFilter, setbusOperatorFilter] = useState(null)
    const [text, setText] = useState("")
    const [isHide, setIsHide] = useState(false);

    // Cauvery Travels, Ideal Travels, MRC Travels, Sri Durga Tourist, VRL Travels, 
    // Pragathi Tourist Corporation, Bharathi Travels, Sugama Tourist, Sowmiya Travels, Anand Travels

    // const items_sample = [
    //     {id : 1, name : "Kottara", status : false},
    //     {id : 2, name : "Infosys", status : false},
    //     {id : 3, name : "Ksrtc", status : false},
    // ]

    const items = [
        {id : 1, name : "Cauvery Travels", status : false},
        {id : 2, name : "Ideal Travels", status : false},
        {id : 3, name : "MRC Travels", status : false},
        {id : 4, name : "Sri Durga Tourist", status : false},
        {id : 5, name : "VRL Travels", status : false},
        {id : 6, name : "Pragathi Tourist Corporation", status : false},
        {id : 7, name : "Bharathi Travels", status : false},
        {id : 8, name : "Sugama Tourist", status : false},
        {id : 9, name : "Sowmiya Travels", status : false},
        {id : 10, name : "Anand Travels", status : false},
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
        <div className={styles.bus_operator_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Bus Operator</div>
                {busOperatorFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            <div className={styles.input_wrapper}>
                <input type="text" value={text} placeholder="Enter/Search operator" className={styles.search_input} onChange={handleChange}/>
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

export {FilterBusOperator};