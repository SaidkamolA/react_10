import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Item() {
    const { id } = useParams();
    const [item, setItem] = useState({}); 

    useEffect(() => {
        fetch("../items.json")
            .then((response) => response.json())
            .then((data) => {
                const i = data[id - 1]; // Adjust this if your IDs start from 0
                setItem(i); 
            });
    }, [id]);  

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Item Details</h1>
                item (
                    <>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Name: {item.name}</h2>
                        <p className="text-gray-600 mb-2">Species: {item.species}</p>
                        <p className="text-gray-600 mb-2">Status: {item.status}</p>
                    </>
                )
                <p>
                    <Link 
                        to='/characters' 
                        className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300 ease-in-out"
                    >
                        Back to Items
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Item;
