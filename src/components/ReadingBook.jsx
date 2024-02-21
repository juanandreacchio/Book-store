import React from 'react'
import { useReading } from '../context/ReadingContext'

export const ReadingBook = ({ cover, name, isbn}) => {

  const { deleteBook } = useReading()

  return (
    <div className='m-1 w-fit h-fit relative'>
    <button onClick={(e) =>{
      e.stopPropagation()
      deleteBook(isbn)
    }} className='absolute text-xl right-[5px] top-[-10px] rounded-full bg-red-600 text-white p-1'>X</button>
    <picture className="">
        <img src={cover} alt={`${name} photo`} className=''/>
    </picture>
    </div>
  )
}
