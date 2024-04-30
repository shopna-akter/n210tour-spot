import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AlltouristSpot = () => {
    const allTours = useLoaderData();
    const [sortBy, setSortBy] = useState(null);
    const sortTours = (tours, order) => {
        return tours.slice().sort((a, b) => {
            const costA = parseFloat(a.average_cost);
            const costB = parseFloat(b.average_cost);
            return order === "asc" ? costA - costB : costB - costA;
        });
    };
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const sortedTours = sortBy ? sortTours(allTours, sortBy) : allTours;

    return (
        <div>
            <div className="text-center flex flex-col gap-2 mb-6">
                <h2 className="font-bold text-xl">All Tourist Spot Section</h2>
                <p>Explore a wide range of tourist spots from around the world. From iconic landmarks to hidden gems, <br /> discover fascinating destinations to add to your travel bucket list.</p>
            </div>
            <div className="mb-4 flex justify-center">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={handleSortChange} className="ml-2">
                    <option value="">Select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTours.map(tour => (
                    <div key={tour._id} className="card border bg-base-100 shadow-xl">
                        <figure>
                            <img src={tour.Photo} className="h-60 w-full object-cover" alt={tour.tourists_spot_name} />
                        </figure>
                        <div className="card-body text-left p-4">
                            <h2 className="font-bold text-xl mb-2">{tour.tourists_spot_name}</h2>
                            <p className="mb-2">Average Cost: {tour.average_cost}</p>
                            <p className="mb-2">Total Visitors Per Year: {tour.totalVisitorsPerYear}</p>
                            <p className="mb-2">Travel Time: {tour.travel_time}</p>
                            <p className="mb-2">Seasonality: {tour.seasonality}</p>
                            <Link to={`/${tour._id}`} className="btn btn-info w-full mt-2">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlltouristSpot;
