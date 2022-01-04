import Button from "../button";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = ({ searchValue }) => {
    const [currentSearch, setCurrentSearch] = useState("");
    const data = useContext(SearchContext);

    return (
        <div>
            <SearchBar
                type="text"
                value={currentSearch}
                onInput={(e) => setCurrentSearch(e.target.value)}
            ></SearchBar>
            <Button
                label="Search"
                clickHandler={() => {
                    data.setSearchTerm(currentSearch);
                    setCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

export default SearchBar;
