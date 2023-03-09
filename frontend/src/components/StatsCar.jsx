import React, { useEffect } from "react";
// import axios from "axios";
import api from "../services/api";
// eslint-disable-next-line import/order
import PropTypes from "prop-types";

function StatsCar({ current }) {
  const [stats, setStats] = React.useState([]);
  const getStats = () => {
    api.get("car/getAllCars").then((res) => {
      setStats(res.data);
    });
  };
  console.warn(stats);
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div
      className="w-48 h-52 bg-[#ecf0f2e6] border-[0.2vw] border-[#F8991C] absolute -right-52 z-50 opacity-0 z-[3] rounded-[2vw] p-3"
      id="StatsCar"
    >
      <p className="flex justify-center text-lg underline my-2">
        {stats[current]?.brand} {stats[current]?.modele} <br />
      </p>
      <p>
        Seat : {stats[current]?.seatNumber}
        <br />
      </p>
      <p>
        Color : {stats[current]?.color}
        <br />
      </p>
      <p>
        Registration : {stats[current]?.imatriculation}
        <br />
      </p>
      <p>
        Park : {stats[current]?.localisation}
        <br />
      </p>
    </div>
  );
}
StatsCar.propTypes = {
  current: PropTypes.number.isRequired,
};
export default StatsCar;
