import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CountriesDetails = () => {
    const tours = useLoaderData();
    const { name } = useParams();
    const countryTours = tours.filter(tour => tour.country_Name === name);
    console.log(countryTours);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
                countryTours.map(countryTour => (
                    <div key={countryTour._id}>
                        <div className="mx-4">
                            <div>
                                <div className="mb-4">
                                    <div className="card border bg-base-100 shadow-xl">
                                        <figure>
                                            <img src={countryTour.Photo} className='h-60' alt='' />
                                        </figure>
                                        <div className="card-body text-left">
                                            <div className="text-center mr-2">
                                                <h2 className="font-bold text-xl">{countryTour.tourists_spot_name}</h2>
                                            </div>
                                            <p>{countryTour.short_description.slice(0, 200)}</p>
                                            <div className="card-actions justify-between">
                                                <div className="flex gap-2">
                                                    <span>Cost:</span>
                                                    <span>{countryTour.average_cost}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <h1>Country:</h1>
                                                    <span>{countryTour.country_Name}</span>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span><FaLocationDot /></span>
                                                    <span>{countryTour.location}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span>Seasonality:</span>
                                                    <span>{countryTour.seasonality}</span>
                                                </div>
                                            </div>
                                            <Link className="btn btn-info" to={`/${countryTour._id}`}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CountriesDetails;