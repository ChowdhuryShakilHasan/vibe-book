import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect,useState } from "react";
import BookCard from "../components/BookCard";

function Home() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("/books.json")
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, 
    []);


  return (
    
       <div className="max-w-6xl mx-auto">
          <Navbar />
          <Hero />

          <section className="mt-20">
            <h2 className="text-4xl font-bold text-center"> BOOKS</h2>

            <div className="grid grid-cols-3 gap-8 mt-12">

                {books.map((book) => (
                    <BookCard
                     key={book.id}
                    book={book}
                />
            ))}

            </div>
          </section>
       </div>

  );
}


export default Home;