import React from "react";
import styles from "./Filter.module.css"
import { FilterHeading } from "./FilterHeading";
import { FilterPopular } from "./FilterPopular";

function Filter() {
    return (
        <div className={styles.filter_main}>
            <FilterHeading />
            <FilterPopular />
        </div>
    )
}

export {Filter};