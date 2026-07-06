import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {  saveReadBook, saveWishlistBook } from "../utilities/localStorage";

function BookDetails() {
    const { id } = useParams();

    const [books, setBooks] = useState([]);
    

    useEffect(() => {
        fetch("/books.json")
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, []);

    const book = books.find((book) => book.id === Number(id));


function handleRead() {
    saveReadBook(book.id);
}

function handleWishlist() {
    saveWishlistBook(book.id);
}

    if (!book) {
        return (
            <div className="max-w-6xl mx-auto p-8">
                <h2 className="text-2xl font-bold">
                    Loading...
                </h2>
            </div>
        );
    }

return (
    <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Navbar />

        <section className="mt-12 flex flex-col lg:flex-row gap-12">   
            <div className="lg:w-1/2 bg-gray-100 rounded-2xl flex justify-center items-center p-10">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-64 md:h-96 object-contain"
                />
            </div>
            <div className="lg:w-1/2">

                <h1 className="text-3xl md:text-4xl font-bold">
                    {book.bookName}
                </h1>

                <p className="mt-4 text-xl text-gray-600">
                    By : {book.author}
                </p>

                <hr className="my-6 border-gray-300" />

                <p className="text-lg text-gray-700">
                     {book.category}
                </p>

                <hr className="my-6 border-gray-300" />

                <p className="leading-8">
                <span className="font-bold">
                      Review :
                </span>{" "}
                    {book.review}
                </p>

                    <div className="flex flex-wrap items-center gap-4 mt-8">
                         <p className="font-semibold">
                         Tag
                        </p>

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                              #{book.tags[0]}
                        </span>

                         <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                              #{book.tags[1]}
                         </span>
                    </div>

                  <hr className="my-8 border-gray-300" />


                        <div className="space-y-4">

                             <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                                 <p className="sm:w-48 text-gray-500">
                                     Number of Pages:
                                </p>

                                <p className="font-semibold">
                                    {book.totalPages}
                                 </p>
                             </div>

                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                                <p className="sm:w-48 text-gray-500">
                                      Publisher:
                                </p>

                                <p className="font-semibold">
                                    {book.publisher}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                                 <p className="sm:w-48 text-gray-500">
                                     Year of Publishing:
                                </p>

                                 <p className="font-semibold">
                                     {book.yearOfPublishing}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                                <p className="sm:w-48 text-gray-500">
                                    Rating:
                                </p>

                                <p className="font-semibold">
                                     {book.rating}
                                </p>
                            </div>

                        </div>


             </div>
 
        </section>

    <div className="flex flex-col sm:flex-row gap-4 mt-10">
    <button
        onClick={handleRead}
        className="w-full sm:w-auto px-7 py-3 border border-black rounded-lg font-semibold hover:bg-gray-100 transition">
                Read
    </button>
    <button
        onClick={handleWishlist}
        className="w-full sm:w-auto px-7 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition">
                 Wishlist
    </button>

    </div>
     
    </div>
);

}

export default BookDetails;