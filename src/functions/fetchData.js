export const fetchData = async (genre = 'all', pages = 1000, bookNameIncludes = '') => {
  try {
    const response = await fetch("/src/data/books.json");
    const data = await response.json();
    const booksGenre = genre !== 'all' ? data.filter(book => book.genre === genre) : data
    if (bookNameIncludes !== ''){
      return booksGenre.filter(book => book.pages <= pages && book.name.includes(bookNameIncludes))
    }
    const booksRef = booksGenre.filter(book => book.pages <= pages)
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
