import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RemainingInventoryStock() {

    const [stockDetails, setStockDetails] = useState([]);

    useEffect(() => {
        const fetchStockDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8070/salesManagement/getRemainingStock`);
                setStockDetails(res.data);
            } catch (error) {
                console.log("Error fetching details", error.message);
            }
        };
        fetchStockDetails();
    }, []);

    return (
        <div className='absolute mt-24 left-80 w-3/4 '>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-14">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Remaining Amount
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockDetails.map((detail, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                                <td className="px-6 py-4">{detail.productName}</td>
                                <td className="px-6 py-4">{detail.stockLevel}</td>
                                {detail.stockLevel === 0 ? (
                                    <td className="px-6 py-4 text-red-600 font-bold">Out of stock</td>
                                ) : detail.stockLevel < 100 ? (
                                    <td className="px-6 py-4 text-yellow-400  font-bold">Low stock</td>
                                ) : (
                                    <td className="px-6 py-4 text-green-500  font-bold">Available</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {stockDetails.length === 0 && <span className="ml-64 px-6 py-4">No data found!</span>}
        </div>
    )
}
