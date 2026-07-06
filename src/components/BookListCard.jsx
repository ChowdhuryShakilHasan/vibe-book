import { Link } from "react-router-dom";

function BookListCard({ book }) {
    return (
       <div className="border border-gray-300 rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row gap-8">

          
           <div className="bg-gray-100 rounded-xl p-6 flex justify-center items-center lg:w-72">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-44 md:h-56 object-contain"
                />
            </div>
            <div className="flex-1">

                <h2 className="text-2xl md:text-3xl font-bold">
                    {book.bookName}
                </h2>

                <p className="mt-3 text-gray-600">
                    By : {book.author}
                </p>


                <div className="flex items-center gap-4 mt-6 flex-wrap">

                <p className="font-semibold">
                      Tag
                 </p>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                     #{book.tags[0]}
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                    #{book.tags[1]}
                </span>

                <p className="text-gray-500">
                     Year of Publishing: {book.yearOfPublishing}
                </p>

            </div>

            <div className="flex items-center gap-8 mt-5 flex-wrap text-gray-500">

                 <p>
                    Publisher: {book.publisher}
                 </p>

                 <p>
                      Page: {book.totalPages}
                    </p>

            </div>

            <div className="flex gap-4 mt-8 flex-wrap">

                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                     Category: {book.category}
                </span>

                <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm">
                         Rating: {book.rating}
                </span>

                    <Link
                        to={`/books/${book.id}`}
                        className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-full sm:w-auto text-center">
                                     View Details
                    </Link>

            </div>

            </div>

        </div>
    );
}

export default BookListCard;

