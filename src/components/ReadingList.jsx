import React from "react";
import { useReading } from "../context/ReadingContext";
import { ReadingBook } from "./ReadingBook";

export const ReadingList = ({ onClose }) => {
  const { readingList, booksInReadingList, clearReadingList } = useReading();

  return <div className="w-2/5 border p-2 h-fit">
    <p className="text-xl font-bold text-center mb-5 mt-2 border-b pb-4">
        {booksInReadingList} {booksInReadingList === 1 ? 'book' : 'books'} in reading list
    </p>
    <div className="grid grid-cols-2 w-full items-center">
    {readingList.map(book => <ReadingBook key={book.isbn} {...book}/>)}
    </div>
    {booksInReadingList > 0 && (
    <button onClick={clearReadingList} className="text-white rounded-lg my-5 bg-red-600 w-full p-3 hover:bg-red-800">Clear reading list</button>
    )}
  </div>;
};
