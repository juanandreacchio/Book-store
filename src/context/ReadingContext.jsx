import { createContext, useContext, useEffect, useState } from "react";

export const ReadingContext = createContext();


  const initalReadingList = JSON.parse(localStorage.getItem("reading__list")) || []; 

export const ReadingProvider = ({ children }) => {
  const [readingList, setReadingList] = useState(initalReadingList);

  const addBook = (book) => {
    setReadingList((prev) => [...prev, book]);
  };

  const deleteBook = (isbn) => {
    const updatedReadingList = readingList.filter((book) => book.isbn !== isbn);
    setReadingList(updatedReadingList);
  };

  const onReadingList = isbn =>{
    return readingList.some(book => book.isbn === isbn)
  }

  const clearReadingList = () => {
    setReadingList([]);
  };

  useEffect(() =>{
    localStorage.setItem("reading__list",JSON.stringify(readingList))
  }, [readingList])

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