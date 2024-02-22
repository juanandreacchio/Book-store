import React from "react";
import { useReading } from "../context/ReadingContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ReadingBook = ({ cover, name, isbn }) => {
  const { deleteBook } = useReading();

  return (
    <div className="m-1 w-fit h-fit relative">
        <button onClick={() => deleteBook(isbn)} className="text-sm md:text-md absolute right-0 top-[-20px] text-white bg-red-600 p-2 rounded-[50%]"><FontAwesomeIcon icon={faTrash} /></button>
      <picture>
        <img src={cover} alt={`${name} photo`}/>
      </picture>
    </div>
  );
};
