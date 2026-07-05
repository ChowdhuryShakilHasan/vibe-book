import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
     <Route path="/books/:id" element={<BookDetails />} />  
     <Route path="/listed-books" element={<ListedBooks />} />
     <Route path="/pages-to-read" element={<PagesToRead />} />
    </Routes>
  );
}

export default App;