import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { BookListContainer } from "./components/BookListContainer";
import { ReadingProvider } from "./context/ReadingContext";
import { BookDetailContainer } from "./components/BookDetailContainer";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
    <ThemeProvider>
      <ReadingProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<BookListContainer />} />
            <Route path="/detail/:bookISBN" element={<BookDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </ReadingProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
