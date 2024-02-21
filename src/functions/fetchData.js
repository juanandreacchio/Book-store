export const fetchData = async (genre = 'all') => {
  try {
    const response = await fetch("/src/data/books.json");
    const data = await response.json();
    const booksRef = genre !== 'all' ? data.filter(book => book.genre === genre) : data
    return booksRef
  } catch (error) {
    return console.error("Error fetching data:", error);
  }
};

export const fetchBook = async isbn =>{
    try {
        const books = await fetchData()
        return books.find(book => book.isbn === isbn)
    } catch (e) {
    return console.error("Error fetching data:", e);
    }
}
