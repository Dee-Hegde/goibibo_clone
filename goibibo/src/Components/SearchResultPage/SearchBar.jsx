import React from "react";
import styles from "./SearchBar.module.css"

function SearchBar() {
    return (
        <div>
            <div className={styles.search_bar_main}>
                <div className={styles.heading_container}>
                    <div>FROM</div>
                    <div>TO</div>
                    <div>DEPARTURE DATE</div>
                </div>
                <div className={styles.sub_container}>
                    <div className={styles.input_main}>
                        <div>
                            <input type="text" className={styles.place_input}/>
                        </div>
                        <div>
                            <img src="https://i.imgur.com/4uiF9Xp.jpg" alt="switch button" style={{width:"35px", marginTop:"2px", cursor:"pointer"}} />
                        </div>
                        <div>
                            <input type="text" className={styles.place_input} />
                        </div>
                        <div>
                            <input type="text" className={styles.date_input}/>
                        </div>
                        <div>
                            <button className={styles.update_button}>UPDATE SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SearchBar};