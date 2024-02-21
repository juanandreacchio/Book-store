import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookListContainer } from "./components/BookListContainer";
import { ReadingProvider } from "./context/ReadingContext";
import { BookDetailContainer } from "./components/BookDetailContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <ReadingProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<BookListContainer />} />
            <Route path="/detail/:bookISBN" element={<BookDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </ReadingProvider>
    </>
  );
}

export default App;
