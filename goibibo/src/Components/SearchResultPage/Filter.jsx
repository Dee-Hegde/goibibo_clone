import React from "react";
import { FilterArrival } from "./ArrivalFilter";
import { FilterBoarding } from "./BoardingFilter";
import { FilterDeparture } from "./DepartureFilter";
import styles from "./Filter.module.css"
import { FilterBusType } from "./FilterBusType";
import { FilterHeading } from "./FilterHeading";
import { FilterPopular } from "./FilterPopular";

function Filter() {
    return (
        <div className={styles.filter_main}>
            <FilterHeading />
            <FilterPopular />
            <FilterBusType />
            <FilterDeparture />
            <FilterArrival />
            <FilterBoarding />
        </div>
    )
}

export {Filter};