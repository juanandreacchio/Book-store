import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReadingList } from "./ReadingList";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleReadingListToggle = () => {
    setShow(!show);
  };



  return (
    <>
      <nav className="w-full h-[10vh] bg-blue-600 flex justify-between p-3">
        <Link to="/">Home</Link>
        <div>
          <button onClick={handleReadingListToggle} className="z-20">
            Abrir
          </button>
        </div>
      </nav>
    </>
  );
};
