function BookCard({book}){
    return (
        <div className="border border-grey-300 rounded-3xl p-6">
            <div className="bg-gray-100 rounded-xl flex justify-center p-6">
                <img 
                  src={book.image}
                  alt={book.bookName}
                  className="h-52"
                  />
            </div>
            <div className="flex gap-4 mt-5">
                <span className="text-green-600 text -sm font-medium">
                    {book.tags[0]}
                </span>
                <span className="text-green-600 text-sm font-medium">
                    {book.tags[1]}
                </span>
            </div>

            <h3 className="text -xl font-bold mt-4">{book.bookName}</h3>
            <p className="text-grey-500 mt-2">By: {book.author}</p>

            <div className="flex justify-between mt-6 text-grey-500">
                <p>{book.category}</p>
                <p>{book.rating}</p>
                

            </div>
        </div>
    );
}
export default BookCard;