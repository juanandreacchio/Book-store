import React from "react";
import { Book } from "./Book";

export const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-3/5 mr-4">
      {books.map((book) => {
        return <Book {...book} key={book.isbn} />;
      })}
    </div>
  );
};
