const BookCard = ({ bookData }) => {
    return (
        <div>
            <h1>{bookData.title}</h1>
            <h2>{bookData.author}</h2>
            <h3>{bookData.description}</h3>
            <img src={bookData.Data.image} alt={bookData.title}></img>
        </div>
    );
};

export default BookCard;
