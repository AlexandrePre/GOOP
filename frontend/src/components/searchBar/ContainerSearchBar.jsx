import React, { useEffect, useState } from "react";
import TravelAvailable from "./TravelAvailable";
import ReactDatePicker from "../ReactDatePicker/ReactDatePicker";
import api from "../../services/api";
import "../../Tailwind.css";

function ContainerSearchBar() {
  const [dataVoyage, setDataVoyage] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [input, setInput] = useState({
    DateStart: "",
    dateEnd: "",
    cityStart: "",
    cityDestination: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const onChangestart = (e) => {
    setInput({ ...input, cityStart: e.target.value });
  };
  const onChangeEnd = (e) => {
    setInput({ ...input, cityDestination: e.target.value });
  };

  const fetchDataVille = () => {
    api
      .get("voyage/getAllVoyages")
      .then((response) => setDataVoyage(response.data))
      .catch((err) => err(err.response));
  };

  useEffect(() => {
    fetchDataVille();
  }, [onChangeEnd]);
  return (
    <div className="searchBar">
      <form className="w-[100%] h-full flex flex-col justify-center items-center text-gray-800 text-lg">
        <div className="flex justify-center gap-16 w-full mt-11 ">
          <div className="flex flex-col gap-1 w-2/5 ">
            <label htmlFor="search" className="">
              Place of departure
            </label>
            <label htmlFor="Ville">
              Filter by{" "}
              <select id="" onClick={onChangestart}>
                <option name="cityStart" value={input.cityStart}>
                  ---
                </option>
                {dataVoyage.map((el) => (
                  <option key={el.id} value={el.cityStart}>
                    {el.cityStart}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-1 w-2/5">
            <label htmlFor="search" className="">
              Arrival point
            </label>
            <label htmlFor="Ville">
              Filter by{" "}
              <select id="" onClick={onChangeEnd}>
                <option name="cityDestination" value={input.cityDestination}>
                  ---
                </option>
                {dataVoyage.map((el) => (
                  <option key={el.id} value={el.cityDestination}>
                    {el.cityDestination}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <ReactDatePicker />
        <button
          type="submit"
          className="bg-orange-400 px-3 py-1 rounded-xl  mt-5"
          onClick={handleClick}
        >
          Find GoOp
        </button>
      </form>
      {show && <TravelAvailable input={input} />}
      <div />
    </div>
  );
}

export default ContainerSearchBar;
