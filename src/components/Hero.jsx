function Hero(){
    return (
        <section className="bg-gray-200 rounded-3xl px-19 py-14 flex items-center justify-between mt-18">
            
        <div className="max-w-lg">
            <h1 className="font-serif text-6xl font-bold leading-tight">Books to freshen up <br />your bookshelf </h1>

            <button className="font-serif font-bold bg-indigo-700 text-white px-6 py-3 rounded-lg mt-8 font-medium">View the List</button>
        </div>
        <div>
        <img
            src="/images/book1.png"
             alt="Hero Book"
        className="w-64"
        />
        </div>



        </section>
    );
}
export default Hero;