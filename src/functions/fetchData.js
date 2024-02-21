export const fetchData = async () => {
  try {
    const response = await fetch("/src/data/books.json");
    const data = await response.json();
    return data;
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
