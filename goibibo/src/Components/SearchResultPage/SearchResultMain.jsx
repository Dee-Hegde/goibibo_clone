import React from "react";
import { Note } from "./Note";
import { SearchBar } from "./SearchBar";

function SearchResultMain() {
    return (
        <div>
            <SearchBar />
            <Note />
            <div style={{height:"1000px"}}>

            </div>
        </div>
    )
}

export default SearchResultMain;