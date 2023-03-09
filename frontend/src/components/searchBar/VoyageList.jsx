import React from "react";
import PropTypes from "prop-types";

function VoyageList({
  DateStart,
  dateEnd,
  cityStart,
  cityDestination,
  seatLeft,
  img,
}) {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center text-gray-800 text-lg mb-4 mt-4">
      <div className="flex w-full items-center justify-center gap-12">
        <img src={img} alt="" className="w-[10%] " />
        <h1>{cityStart}</h1>
        <h1>{cityDestination}</h1>
        <h1>{DateStart}</h1>
        <h1>{dateEnd}</h1>
        <h1>&nbsp;&nbsp;&nbsp;{seatLeft}</h1>
        <p className=" flex items-center justify-center rounded-3xl py-0.5 px-2  bg-orange-400">
          Book
        </p>
      </div>
    </div>
  );
}
VoyageList.propTypes = {
  DateStart: PropTypes.string.isRequired,
  cityStart: PropTypes.string.isRequired,
  cityDestination: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  seatLeft: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default VoyageList;
