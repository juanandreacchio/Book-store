import React from "react";
import { useReading } from "../context/ReadingContext";

export const BookDetail = ({
  name,
  author,
  year,
  cover,
  pages,
  synopsis,
  isbn,
}) => {
  const { addBook, onReadingList, deleteBook } = useReading();

  const handleOnClick = () => {
    const bookToAdd = {
      name,
      year,
      cover,
      isbn
    };
    console.log(bookToAdd);
    addBook(bookToAdd)
  };
  return (
    <div className="flex min-h-[90vh] w-full justify-center items-center py-4">
      <div className="flex justify-center gap-8 w-3/4">
        <picture className="w-1/2">
          <img src={cover} alt={`${name} cover`} />
        </picture>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-2">
            {name}{" "}
            <span className="text-2xl text-gray-400 font-normal">- {year}</span>
          </h2>
          <h3 className="mb-2">By {author}</h3>
          <p className="w-full py-3 border-y-2">{synopsis}</p>
          <div className="flex gap-4">
          <button disabled={onReadingList(isbn)} onClick={handleOnClick} className={`${onReadingList(isbn) ? 'w-1/2' : 'w-full'} p-3  bg-blue-400 text-white hover:bg-blue-600 mt-3 text-lg`}>
            {onReadingList(isbn) ? 'This book is already in the reading list' : 'Add to reading list'}
          </button>
          {onReadingList(isbn) && (
            <button onClick={() => deleteBook(isbn)} className="p-3 w-1/2 bg-red-400 text-white hover:bg-red-600 mt-3 text-lg">Remove from reading list</button>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
