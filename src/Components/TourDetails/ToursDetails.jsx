import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const ToursDetails = () => {
    const tours = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const tour = tours.find(tour => tour._id == id);
    console.log(id, idInt, tours);
    return (
        <div className="container mx-auto my-8">
            <Helmet>
                <title>HomeSpot | Tour Details of {tour.tourists_spot_name}</title>
            </Helmet>
            <div className="max-w-3xl mx-auto px-4">
                <img className="w-full h-auto rounded-lg" src={tour.Photo} alt="" />
                <h1 className="text-3xl font-bold mt-6 mb-4">{tour.tourists_spot_name}</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-1">
                        <h2 className="font-semibold mb-2">Average Cost:</h2>
                        <p>{tour.average_cost}</p>
                    </div>
                    <div className="flex gap-1">
                        <h2 className="font-semibold mb-2">Country:</h2>
                        <p>{tour.country_Name}</p>
                    </div>
                </div>
                <hr className="my-6" />
                <div>
                    <h2 className="font-semibold mb-2">Description:</h2>
                    <p>{tour.short_description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                        <h2 className="font-semibold">Location:</h2>
                        <p>{tour.location}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Seasonality:</h2>
                        <p>{tour.seasonality}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                        <h2 className="font-semibold">Travel Time:</h2>
                        <p>{tour.travel_time}</p>
                    </div>
                    <div>
                        <h2 className="font-semibold">Total Visitors Per Year:</h2>
                        <p>{tour.totalVisitorsPerYear}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <button className="btn btn-outline w-full">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToursDetails;