import { createContext, useContext, useState } from "react";

export const ReadingContext = createContext();

export const ReadingProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);

  const addBook = (book) => {
    setReadingList((prev) => [...prev, book]);
  };

  const deleteBook = (isbn) => {
    const updatedReadingList = readingList.filter((book) => book.ISBN !== isbn);
    setReadingList(updatedReadingList);
  };

  const onReadingList = isbn =>{
    return readingList.some(book => book.isbn === isbn)
  }

  const clearReadingList = () => {
    setReadingList([]);
  };

  const booksInReadingList = readingList.length

  return (
    <ReadingContext.Provider
      value={{ readingList, addBook, deleteBook, clearReadingList, booksInReadingList, onReadingList }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReading = () =>{
  return useContext(ReadingContext)
}