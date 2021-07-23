import React from "react";
import { FilterAmenities } from "./AmenitiesFilter";
import { FilterArrival } from "./ArrivalFilter";
import { FilterBoarding } from "./BoardingFilter";
import { FilterBusOperator } from "./BusOperatorFilter";
import { FilterDeparture } from "./DepartureFilter";
import { FilterDropping } from "./DroppingFilter";
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
            <FilterDropping />
            <FilterBusOperator />
            <FilterAmenities />
        </div>
    )
}

export {Filter};