import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBook } from "../functions/fetchData";
import { BookDetail } from "./BookDetail";

export const BookDetailContainer = () => {
  const { bookISBN } = useParams();

  const [book, setBook] = useState(null)

  useEffect(() =>{
    const findBook = async () =>{
      const fetchedBook = await fetchBook(bookISBN)
      setBook(fetchedBook)
    }

    findBook()
  }, [bookISBN])

  return book && <BookDetail {...book} />
};
