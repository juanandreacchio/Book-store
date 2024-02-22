import React, { useEffect, useState } from "react";
import { BookList } from "./BookList";
import { fetchData } from "../functions/fetchData";
import { ReadingList } from "./ReadingList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("all");
  const [sliderValue, setSliderValue] = useState(600);
  const [bookInclude, setBookInclude] = useState('')
  const [bookNameSearch, setBookNameSearch] = useState('')
  const [searchRealized, setSearchRealized] = useState(false)

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksFetched = await fetchData(genre, sliderValue, bookNameSearch);
        setBooks(booksFetched);
        setBookInclude('')
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [genre, sliderValue, bookNameSearch]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSearchChange = (e) =>{
    setBookInclude(e.target.value)
  }

  const handleSearchButton = () =>{
    setBookNameSearch(bookInclude)
    if(bookInclude !== ''){
      setSearchRealized(true)
      return
    }
    setSearchRealized(false)
  }

  return (
    <div className="px-8 py-4">
      <h1 className="text-6xl font-bold mb-5">Book Store</h1>
      <div className="w-full md:w-3/5 pr-4 my-3">
      <input onChange={handleSearchChange} type="text" placeholder="Search your book here" className="input input-bordered w-4/5 rounded-none rounded-l-lg" />
      <button onClick={handleSearchButton} className="p-3 bg-blue-400 rounded-r-lg text-white w-1/5"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      {searchRealized && (<p>{books.length} {books.length === 1 ? 'result' : 'results'} found for '{bookNameSearch}'</p>)}
      </div>
      <div className="flex w-3/5 pr-4 flex-col gap-4 lg:flex-row">
        <div className="flex flex-col items-start justify-start w-full lg:block lg:w-1/2">
          <label htmlFor="genreSelect" className="text-xs mb-3 lg:text-lg">
            Select a genre:
          </label>
          <select
            id="genreSelect"
            className="text-xs lg:text-lg p-2 lg:ml-4 font-semibold"
            value={genre}
            onChange={handleGenreChange}
          >
            <option value="all">All</option>
            <option value="Biography">Biography</option>
            <option value="Endgame">Endgame</option>
            <option value="Strategy">Strategy</option>
            <option value="Tournament">Tournament</option>
            {/* Agregar más opciones según tus géneros */}
          </select>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-xs lg:text-lg lg:text-start">
            Filter by page amount: {sliderValue}
          </p>
          <input
            type="range"
            min="100"
            max="600"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>
      </div>

      {books.length > 0 ? (
        <div className="flex">
          <BookList books={books} />
          <ReadingList />
        </div>
      ) : (
        <div className="flex">
          <p className="py-10 w-3/5 mr-4 text-center text-4xl">
            No books were found. Try again
          </p>
          <ReadingList />
        </div>
      )}
    </div>
  );
};
