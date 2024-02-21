import React from "react";
import { Book } from "./Book";

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-3 gap-6 p-10 w-3/5">
      {books.map((book) => {
        return <Book {...book} key={book.isbn} />;
      })}
    </div>
  );
};
