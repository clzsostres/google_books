export const getBook = async (name) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    let response = await fetch(url + name);
    console.log(response);
    let json = response.json();
    return json;
};
