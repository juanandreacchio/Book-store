import React, { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { fetchData } from "../functions/fetchData";
import { ReadingList } from "./ReadingList";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState('all');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksFetched = await fetchData(genre);
        setBooks(booksFetched);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [genre]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="px-8 py-4">
      <h1 className="text-6xl font-bold mb-5">Book Store</h1>

      <label htmlFor="genreSelect" className="text-lg">Select a genre:</label>
      <select id="genreSelect" className="text-lg p-2 ml-4 font-semibold" value={genre} onChange={handleGenreChange}>
        <option value="all">All</option>
        <option value="Biography">Biography</option>
        <option value="Endgame">Endgame</option>
        <option value="Strategy">Strategy</option>
        <option value="Tournament">Tournament</option>
        {/* Agregar más opciones según tus géneros */}
      </select>

      {books.length > 0 ? (
        <div className="flex">
          <BookList books={books} />
          <ReadingList />
        </div>
      ) : (
        <p>No hay libros perri</p>
      )}
    </div>
  );
};
