import BookCard from "../../components/BookCard";
import { getBook } from "../../assets/utils/booksAPI";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const generateBookData = (apiData) => {
    const bookDataArray = apiData.map((book) => {
        const bookData = {};
        bookData.title = book.title;
        bookData.author = book.author;
        bookData.description = book.description;
        bookData.image = book.image;
        return bookData;
    });
    return bookDataArray;
};

const BookContainer = () => {
    const [bookData, setBookData] = useState([]);
    const data = useContext(SearchContext);

    useEffect(
        () =>
            (async () => {
                let apiData = await getBook(data.searchTerm);
                let bookData = generateBookData(apiData);
                console.log(bookData);
                setBookData(bookData);
            })(),
        [data.searchTerm]
    );

    return bookData.length ? (
        <BookCard bookData={bookData[0]}></BookCard>
    ) : (
        <></>
    );
};

export default BookContainer;
