import React from "react";
import styles from "./Note.module.css"

function Note() {
    const string = "Bengaluru"
    return (
        <div className={styles.note_wrapper}>
            <div className={styles.image_div}>
                <img src="https://i.imgur.com/X4EH7km.jpg" alt="Note_image" style={{width:"100%"}}/>
            </div>
            <div className={styles.text_div}>
                {`${string} may have travel restriction as per state guidelines. Check latest update before travel.`}
            </div>
            <div className={styles.link_div}>
                <a href="https://www.goibibo.com/info/mysafety">Learn more</a>
            </div>
        </div>
    )
}

export {Note};