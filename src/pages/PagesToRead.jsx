import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell
} from "recharts";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getStoredReadBooks } from "../utilities/localStorage";


const colors = [
     "#23BE0A",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "#AF19FF",
    "#FF4560",
    "#00C49F",
    "#775DD0"
];


function PagesToRead() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then((response) => response.json())
            .then((data) => {

                const readIds = getStoredReadBooks();

                const readBooks = data.filter((book) =>
                    readIds.includes(book.id)
                );

                setBooks(readBooks);

            });

    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Navbar />

   

           <div className="bg-gray-100 rounded-2xl p-4 md:p-10 mt-10 h-[400px] md:h-[600px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                         data={books}
                            margin={{
                                    top: 20,
                                     right: 10,
                                    left: 0,
                                     bottom: 60
                                    }}>

                        <XAxis
                        
                            dataKey="bookName"
                            angle={-25}
                            textAnchor="end"
                            interval={0}
                            height={80}
                        />
                    

                       <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />

                    

                        <Bar
                            dataKey="totalPages"
                            radius={[8, 8, 0, 0]}
                            label={{
                                    position: "top",
                                    fill: "#111827",
                                    fontSize: 12,
                                    fontWeight: "bold"
                                    }}>
                                        
    {books.map((book, index) => (
        <Cell
            key={book.id}
            fill={colors[index % colors.length]}
        />
    ))}
</Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>






        </div>
    );
}

export default PagesToRead;