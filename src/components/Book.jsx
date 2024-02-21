import { Link } from "react-router-dom"

export const Book = ({name, author, cover, isbn}) => {
  return (
    <Link to={`/detail/${isbn}`}>
    <div className="min-h-72">
    <picture className="w-full flex justify-center items-center bg-gray-300 p-3">
        <img src={cover} alt={`${name} photo`} className="w-1/2" />
    </picture>
    <h3 className="text-md">{name}</h3>
    <p className="text-sm">by <span className="text-orange-300 font-semibold">{author}</span></p>
    </div>
    </Link>
  )
}
