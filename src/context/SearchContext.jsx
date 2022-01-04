import { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    console.log("THIS IS INSIDE OF THE CONTEXT", searchTerm);

    const data = { searchTerm, setSearchTerm };

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
