import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AddTouristSpot = () => {
    const handleAddTouristSpot = e => {
        e.preventDefault()
        const form = e.target
        const tourists_spot_name = form.tourists_spot_name.value
        const country_Name = form.country_Name.value
        const location = form.location.value
        const seasonality = form.seasonality.value
        const average_cost = form.average_cost.value
        const travel_time = form.travel_time.value
        const Photo = form.Photo.value
        const User_Email = form.User_Email.value
        const User_Name = form.User_Name.value
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value
        const short_description = form.short_description.value
        const newTour = {User_Name ,User_Email , short_description, totalVisitorsPerYear ,tourists_spot_name, country_Name, location, seasonality, average_cost, travel_time, Photo }
        console.log(newTour);
        fetch('http://localhost:5000/tours' , {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:   JSON.stringify(newTour)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "Tour added successfuly!",
                    icon: "success"
                  })
            }
        });
    }
    return (
        <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
            <Link to="/" className="self-start ml-16 backdrop-blur-lg mb-5 font-semibold">
                ← Back to home
            </Link>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-center mb-4">Add New Tour</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddTouristSpot} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">User Name</label>
                            <input required type="text" placeholder="Enter User Name" name="User_Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">User Email</label>
                            <input required type="text" placeholder="Enter User Email" name="User_Email" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input required type="text" placeholder="Enter tourists spot name" name="tourists_spot_name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">country Name</label>
                            <input required type="text" placeholder="Enter country Name" name="country_Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">location</label>
                            <input required type="text" placeholder="Enter tour location" name="location" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">seasonality</label>
                            <input required type="text" placeholder="Enter tour seasonality" name="seasonality" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Average Cost</label>
                            <input required type="text" placeholder="Enter Tour Average Cost" name="average_cost" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Travel Time</label>
                            <input required type="text" placeholder="Enter Tour Travel Time" name="travel_time" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
                            <input required type="text" placeholder="Enter Tour Total Visitors Per Year" name="totalVisitorsPerYear" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <input required type="text" placeholder="Enter Tour Photo" name="Photo" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">short description</label>
                                <input required type="text" placeholder="Enter Tour short description" name="short_description" className="input input-bordered w-[204%]" />
                            </div>
                            <div>
                                <button className="btn w-[204%] text-gray-100 hover:text-white btn-info">Add Tour Spot
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddTouristSpot;