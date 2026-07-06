import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
    getStoredReadBooks,
    getStoredWishlistBooks
} from "../utilities/localStorage";

import BookListCard from "../components/BookListCard";


function ListedBooks() {
    const [readBooks, setReadBooks] = useState([]);
    const [activeTab, setActiveTab] = useState("read");
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
    fetch("/books.json")
        .then((response) => response.json())
        .then((books) => {

            const readIds = getStoredReadBooks();
            const wishlistIds = getStoredWishlistBooks();

            const readBooksData = books.filter((book) =>
                readIds.includes(book.id)
            );

            const wishlistBooksData = books.filter((book) =>
                 wishlistIds.includes(book.id)
            );

setReadBooks(readBooksData);
setWishlistBooks(wishlistBooksData);

        });

}, []);



function handleSort(type) {
    const booksToSort =
        activeTab === "read"
            ? [...readBooks]
            : [...wishlistBooks];

    if (type === "rating") {
        booksToSort.sort((a, b) => b.rating - a.rating);
    }

    if (type === "pages") {
        booksToSort.sort((a, b) => b.totalPages - a.totalPages);
    }

    if (type === "year") {
        booksToSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    if (activeTab === "read") {
        setReadBooks(booksToSort);
    } else {
        setWishlistBooks(booksToSort);
    }
}

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Navbar />

            <div className="bg-gray-100 rounded-2xl py-8 mt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    Listed Books
                </h1>
            </div>

            <div className="mt-8 flex justify-center">


        <select
        onChange={(e) => handleSort(e.target.value)}
        className="bg-green-400 border rounded-lg px-4 py-2"
        defaultValue="">
        <option value="" disabled>
            Sort By
        </option>

        <option value="rating">
            Rating
        </option>

        <option value="pages">
            Number of Pages
        </option>

        <option value="year">
            Year of Publishing
        </option>
        </select>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 border-b">

            <button
                 onClick={() => setActiveTab("read")}
                className={`pb-3 ${
                        activeTab === "read" ? "border-b-2 border-green-500 font-semibold": "text-gray-500"
                    }`}>
                        Read Books
            </button>

            <button
                 onClick={() => setActiveTab("wishlist")}
                    className={`pb-3 ${
                    activeTab === "wishlist"? "border-b-2 border-green-500 font-semibold": "text-green-500"
                     }`}>
                         Wishlist Books
            </button>

            </div>

            <div className="mt-10 space-y-6">
{(activeTab === "read" ? readBooks : wishlistBooks).map((book) => (
    <BookListCard
        key={book.id}
        book={book}/>
))}

        </div>
        </div>
    );
}

export default ListedBooks;