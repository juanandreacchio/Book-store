import { Link } from "react-router-dom"

export const Book = ({name, author, cover, isbn}) => {
  return (
    <div className="h-72 my-3">
    <Link to={`/detail/${isbn}`}>
    <picture className="w-full flex justify-center items-center bg-gray-300 p-3">
        <img src={cover} alt={`${name} photo`} className="w-1/2" />
    </picture>
    <h3 className="text-md">{name}</h3>
    <p className="text-sm">by <span className="text-orange-300 font-semibold">{author}</span></p>
    </Link>
    </div>
  )
}
