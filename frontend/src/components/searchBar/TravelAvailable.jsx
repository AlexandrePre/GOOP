import React from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import dataVoyage from "../../tools/dataVoyage";
import VoyageList from "./VoyageList";

function TravelAvailable({ input }) {
  const handleClick = () => {
    gsap.to(".findTravel", { opacity: 0, duration: 0.5, delay: 0 });
    gsap.to(".searchBar", { opacity: 0, duration: 0.5, delay: 0, scale: 0 });
    gsap.to(".imgcar", { opacity: 1, duration: 1, delay: 0, scale: 1 });
    gsap.to("#arrowRight", { opacity: 1, duration: 0.5, delay: 1 });
    gsap.to("#arrowLeft", { opacity: 1, duration: 0.5, delay: 1 });
    gsap.to("#selectCar", { opacity: 1, duration: 0.5, delay: 2 });
    gsap.to("#StatsCar", { opacity: 1, duration: 1, delay: 0, x: -400 });
  };
  return (
    <div
      className={
        input.cityDestination === "Paris" ? "findTravel" : "invFindTravel"
      }
    >
      <div className="w-[100%] h-full flex flex-col justify-center items-center text-gray-800 text-lg mt-6">
        {input.cityDestination === "Paris" ? (
          <div className="flex flex-col items-center gap-2 ">
            <div className="">
              <p>No trip, please create one.</p>
              <div className="flex gap-6 mt-2">
                <label htmlFor="search" className="">
                  number of people:
                </label>
                <select
                  name=""
                  id=""
                  className="bg-orange-200 w-12 rounded-lg pl-4 text-base focus:outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="bg-orange-400 px-3 py-1 rounded-xl mt-4"
              onClick={handleClick}
            >
              Create GoOP
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col ">
            <p className="m-auto pl-20">
              Departure place - Arrival place - Departure Date -
              &nbsp;&nbsp;&nbsp;&nbsp;Return Date - Seat Availability
            </p>
            {dataVoyage.map((el) => (
              <VoyageList
                key={el.id}
                DateStart={el.DateStart}
                dateEnd={el.dateEnd}
                cityStart={el.cityStart}
                cityDestination={el.cityDestination}
                seatLeft={el.seatLeft}
                img={el.img}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
TravelAvailable.propTypes = {
  input: PropTypes.string.isRequired,
};
export default TravelAvailable;
