import{ Link } from "react-router-dom";

function BookCard({book}){
    return (
    <Link to={`/books/${book.id}`}>
        <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="bg-gray-200 rounded-xl flex justify-center p-6">
                <img 
                  src={book.image}
                  alt={book.bookName}
                  className="h-52"
                  />
            </div>
            <div className="flex gap-4 mt-5">
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
                    {book.tags[0]}
                </span>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
                    {book.tags[1]}
                </span>
            </div>

            <h3 className="text-2xl font-bold mt-4">{book.bookName}</h3>
            <p className="text-gray-500 mt-2">By: {book.author}</p>

            <div className="flex justify-between items-center mt-6 pt-5 border-t border-dashed border-gray-300 text-gray-500">
                <p>{book.category}</p>
                <p>{book.rating}</p>
                

            </div>
        </div>
        </Link>
    );
}
export default BookCard;