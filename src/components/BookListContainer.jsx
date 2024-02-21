import { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { fetchData } from "../functions/fetchData";
import { useReading } from "../context/ReadingContext";
import { ReadingList } from "./ReadingList";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);

  const { booksInReadingList } = useReading()

  useEffect(() => {
    const fetchBooks = async () => {
      const booksFetched = await fetchData();
      setBooks(booksFetched);
    };

    fetchBooks()
  }, []);

  return books.length > 0 ? (
    <div className="px-8 py-4 flex">
    <BookList books={books} />
    <ReadingList />
    </div>
  ) : (
    <p>No hay libros perri</p>
  );
};
