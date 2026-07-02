import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-6">
       <h1 className="text-2xl font-bold"> Vibe Book</h1>

        <ul className="flex gap-8">

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


        <div className="flex gap-4">
            <button className="bg-green-600 text-white px-5 py-2 rounded -lg">
                Sign In
            </button>

            <button className="bg-indigo-700 text-white px-5 py-2 rounded-lg">
                Sign up
            </button>
        </div>
     </nav>
    );



}

export default Navbar;