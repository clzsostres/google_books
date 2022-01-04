import "./App.css";
import BookContainer from "./containers/BookContainer/BookContainer";
import SearchContext from "./context/SearchContext";
import SearchBar from "./components/SearchBar/SearchBar";
// import { useState, useEffect } from "react";

function App() {
    return (
        <div className="App">
            <SearchContext>
                <SearchBar></SearchBar>
                <BookContainer></BookContainer>
            </SearchContext>
        </div>
    );
}

export default App;
