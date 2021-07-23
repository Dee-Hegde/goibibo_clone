import React, {useState} from "react";
import styles from "./AmenitiesFilter.module.css"

function FilterAmenities() {
    const [amenitiesFilter, setAmenitiesFilter] = useState(null);
    const [text, setText] = useState("");
    const [isHide, setIsHide] = useState(false);

    // water bottle, blankets, wifi, Thermal Scanner, Charging Point, Reading Light,
    //  Pillow, Emergency Contact Number, Magazine Pouch, Personal TV

    // const items_sample = [
    //     {id : 1, name : "Kottara", status : false},
    //     {id : 2, name : "Infosys", status : false},
    //     {id : 3, name : "Ksrtc", status : false},
    // ]

    const items = [
        {id : 1, name : "Water Bottle", status : false, img : "https://i.imgur.com/qSB3Q1u.jpg"},
        {id : 2, name : "Blankets", status : false, img : "https://i.imgur.com/THyHZt9.jpg"},
        {id : 3, name : "Wifi", status : false, img : "https://i.imgur.com/8hgbP1F.jpg"},
        {id : 4, name : "Thermal Scanner", status : false, img : "https://i.imgur.com/ESf2I9E.jpg"},
        {id : 5, name : "Charging Point", status : false, img : "https://i.imgur.com/W7kJXqa.jpg"},
        {id : 6, name : "Reading Light", status : false, img : "https://i.imgur.com/owQ7ycl.jpg"},
        {id : 7, name : "Pillow", status : false, img : "https://i.imgur.com/W5jxFdT.jpg"},
        {id : 8, name : "Emergency Contact Number", status : false, img : "https://i.imgur.com/DhToe5O.jpg"},
        {id : 9, name : "Magazine Pouch", status : false, img : "https://i.imgur.com/THt5bYs.jpg"},
        {id : 10, name : "Personal TV", status : false, img : "https://i.imgur.com/mZfK2eW.jpg"},
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
        <div className={styles.amenities_main}>
            <div className={styles.heading_wrapper}>
                <div className={styles.heading}>Amenities</div>
                {amenitiesFilter === null ? <div className={styles.reset_desable} >Reset</div> : <div className={styles.reset}>Reset</div> }
            </div>
            {/* <div className={styles.input_wrapper}>
                <input type="text" value={text} placeholder="Enter/Search dropping point" className={styles.search_input} onChange={handleChange}/>
                <div className={styles.logo_wrapper} >
                    {text === "" ? <img src="https://i.imgur.com/DTZeXlj.jpg" alt="search_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/5YUm9k6.jpg" alt="cancel_logo" style={{width:"100%"}} onClick={handleClearSearch}/> }
                </div>
            </div> */}
            <div className={styles.partition}>
                
            </div>
             {isHide ? <div className={styles.items_wrapper2}>
                {item.map(item => <div key={item.id} className={styles.item}>
                    <div onClick={() => handleCheck(item.id)}>
                        {item.status ? <img src="https://i.imgur.com/bb5PWj7.jpg" alt="checked_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/QoMsC55.jpg" alt="unchecked_logo" style={{width:"100%"}} /> }
                    </div>
                    <div onClick={() => handleCheck(item.id)}>
                            <img src={item.img} alt="item_logo" style={{height:"110%"}}/>
                        </div>
                    <div>{item.name}</div>
                </div> )}
            </div> : <div className={styles.items_wrapper}>
                {item.map((item, i) => i === 0 || i === 1 || i === 2 ? <div key={item.id} className={styles.item}>
                    <div onClick={() => handleCheck(item.id)}>
                        {item.status ? <img src="https://i.imgur.com/bb5PWj7.jpg" alt="checked_logo" style={{width:"100%"}}/> : <img src="https://i.imgur.com/QoMsC55.jpg" alt="unchecked_logo" style={{width:"100%"}} /> }
                    </div>
                    <div onClick={() => handleCheck(item.id)}>
                            <img src={item.img} alt="item_logo" style={{height:"110%"}}/>
                        </div>
                    <div>{item.name}</div>
                </div> : "")}
            </div>} 
            <div className={styles.is_hide} onClick={handleHide}>{!isHide ? `+ Show all boarding points` : `- Show less boarding points`}</div>
        </div>
    )
}

export {FilterAmenities};