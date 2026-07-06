import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-6 px-4">
       <h1 className="text-2xl font-bold"> Vibe Book</h1>

        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/listed-books">Listed Books</Link>
            </li>

             <li>
                <Link to="/pages-to-read">Pages To REad</Link>
            </li>

        </ul>


        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto">
                Sign In
            </button>

            <button className="bg-indigo-700 text-white px-5 py-2 rounded-lg w-full sm:w-auto">
                Sign up
            </button>
        </div>
     </nav>
    );



}

export default Navbar;