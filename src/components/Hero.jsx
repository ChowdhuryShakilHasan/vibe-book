import { Link } from "react-router-dom";

function Hero(){
    return (
        <section className="bg-gray-200 rounded-3xl px-6 md:px-16 py-10 md:py-14 flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-10 md:mt-18">
            
        <div className="max-w-lg text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">Books to freshen up <br />your bookshelf </h1>

            <Link to="/listed-books"className="inline-block font-serif font-bold bg-indigo-700 text-white px-6 py-3 rounded-lg mt-8">
                        View the List
            </Link>
        </div>
        <div>
        <img
            src="/images/book1.png"
             alt="Hero Book"
        className="w-48 md:w-64"
        />
        </div>



        </section>
    );
}
export default Hero;