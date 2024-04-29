import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const tours = useLoaderData();
    console.log(tours, user);

    let currentUserTour = null;

    if (tours && user) {
        currentUserTour = tours.find(tour => tour.User_Email && user.email === tour.User_Email);
    }

    console.log(currentUserTour);
    if (!currentUserTour) {
        return (
            <div className="text-center">
                <h2>You have not added any tour</h2>
            </div>
        )
    }

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/tours/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deleteCount > 0) {
                                Swal.fire({
                                    title: "data deleted!",
                                    text: "You clicked the button!",
                                    icon: "success"
                                });
                            }
                        })
                }
            })
    }
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tourist Spot Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Seasonality
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tours
                        .filter(tour => tour.User_Email && user && tour.User_Email === user.email)
                        .map((tour, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <h2 className="text-lg font-semibold">{tour.tourists_spot_name}</h2>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <h2 className="text-lg font-semibold">{tour.location}</h2>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <h2 className="text-lg font-semibold">{tour.seasonality}</h2>
                                </td>
                                <td className="px-6 gap-4 py-4 flex whitespace-nowrap text-sm text-gray-500">
                                    <Link to={`/updateTour/${tour._id}`} className="text-indigo-600 btn hover:text-indigo-900">
                                        <FaEdit></FaEdit>
                                    </Link>
                                    <button onClick={() => handleDelete(tour._id)} className="text-red-600 hover:text-red-900 ml-2 btn">
                                        <FaDeleteLeft></FaDeleteLeft>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>

            </table>

        </div>
    );
};

export default MyList;