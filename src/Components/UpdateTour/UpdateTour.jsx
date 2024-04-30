import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTour = () => {
    const tour = useLoaderData()
    const { short_description, totalVisitorsPerYear, tourists_spot_name, country_Name, location, seasonality, average_cost, travel_time, Photo, _id } = tour
    const handleUpdateTouristSpot = e => {
        e.preventDefault()
        const form = e.target
        const tourists_spot_name = form.tourists_spot_name.value
        const country_Name = form.country_Name.value
        const location = form.location.value
        const seasonality = form.seasonality.value
        const average_cost = form.average_cost.value
        const travel_time = form.travel_time.value
        const Photo = form.Photo.value
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value
        const short_description = form.short_description.value
        const updatedTour = { short_description, totalVisitorsPerYear ,tourists_spot_name, country_Name, location, seasonality, average_cost, travel_time, Photo }
        console.log('short des:',short_description);
        fetch(`https://assignment-10-server-blush-zeta.vercel.app/tours/${_id}` , {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:   JSON.stringify(updatedTour)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Good job!",
                    text: "Tour Updated successfuly!",
                    icon: "success"
                  })
            }
        });
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
                    <h2 className="text-2xl font-bold text-center mb-4">Update Tour: {tourists_spot_name}</h2>
                    <p className="text-center text-gray-600 mb-8">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={handleUpdateTouristSpot} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" defaultValue={tourists_spot_name} placeholder="Enter tourists spot name" name="tourists_spot_name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">country Name</label>
                                <input type="text" defaultValue={country_Name} placeholder="Enter country Name" name="country_Name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">location</label>
                                <input type="text" defaultValue={location} placeholder="Enter tour location" name="location" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">seasonality</label>
                                <input type="text" defaultValue={seasonality} placeholder="Enter tour seasonality" name="seasonality" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Average Cost</label>
                                <input type="text" defaultValue={average_cost} placeholder="Enter Tour Average Cost" name="average_cost" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Travel Time</label>
                                <input type="text" defaultValue={travel_time} placeholder="Enter Tour Travel Time" name="travel_time" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
                                <input type="text" defaultValue={totalVisitorsPerYear} placeholder="Enter Tour Total Visitors Per Year" name="totalVisitorsPerYear" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input type="text" defaultValue={Photo} placeholder="Enter Tour Photo" name="Photo" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <div className="mb-2">
                                    <label className="block text-sm font-medium text-gray-700">short description</label>
                                    <textarea type="text" defaultValue={short_description} name="short_description" placeholder="Enter your description" className="textarea textarea-bordered textarea-lg w-[200%]" />
                                </div>
                                <div>
                                    <button className="btn w-[204%] text-gray-100 hover:text-white btn-info">Update Tour Spot
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTour;