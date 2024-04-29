/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const TouristSpot = ({ tour }) => {
  const { short_description, totalVisitorsPerYear, tourists_spot_name, country_Name, location, seasonality, average_cost, travel_time, Photo, _id } = tour
  return (
    <div className="mx-4">
      <div >
        <div className="mb-4">
          <div className="card border bg-base-100 shadow-xl">
            <figure>
              <img src={Photo} className='h-60' alt='' />
            </figure>
            <div className="card-body text-left">
              <div className="text-center mr-2">
                <h2 className="font-bold text-xl">{tourists_spot_name}</h2>
              </div>
              <p>{short_description}</p>
              <div className="card-actions justify-between">
                <div className="flex gap-2">
                  <span>Cost:</span>
                  <span>{average_cost}</span>
                </div>
                <div className="flex gap-2">
                  <h1>Country:</h1>
                  <span>{country_Name}</span>
                </div>
              </div>
              <div className="card-actions justify-between">
                <div className="flex items-center gap-2">
                  <span><FaLocationDot /></span>
                  <span>{location}</span>
                </div>
                <div className="flex gap-2">
                  <span>Seasonality:</span>
                  <span>{seasonality}</span>
                </div>
              </div>
              <div className="card-actions justify-between">
                <div className="flex items-center gap-2">
                  <span>Travel time :</span>
                  <span>{travel_time}</span>
                </div>
                <div className="flex gap-2">
                  <span>Visitors(year):</span>
                  <span>{totalVisitorsPerYear}</span>
                </div>
              </div>
              <Link className="btn btn-info" to={`/${_id}`}>View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;