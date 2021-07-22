import React from "react";
import { Filter } from "./Filter";
import styles from "./ResultMain.module.css"
import { Results } from "./Results";

function ResultMain() {
    return (
        <div className={styles.result_main}>
            <Filter />
            <Results />
        </div>
    )
}

export {ResultMain};