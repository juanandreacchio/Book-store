import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleReadingListToggle = () => {
    setShow(!show);
  };



  return (
    <>
      <nav className="w-full h-[10vh] bg-blue-600 p-3 px-8 flex items-center">
        <Link to="/"><FontAwesomeIcon icon={faHome} className="text-4xl text-white"/></Link>
      </nav>
    </>
  );
};
