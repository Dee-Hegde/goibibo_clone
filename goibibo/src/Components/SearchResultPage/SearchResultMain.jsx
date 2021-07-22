import React from "react";
import { Note } from "./Note";
import { ResultMain } from "./ResultMain";
import { SearchBar } from "./SearchBar";

function SearchResultMain() {
    return (
        <div>
            <SearchBar />
            <Note />
            <ResultMain />
        </div>
    )
}

export default SearchResultMain;