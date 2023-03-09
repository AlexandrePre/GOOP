import React from "react";
import PropTypes from "prop-types";
import dataCar from "../../tools/dataCar";

function CarContainer({ isActive }) {
  return (
    <div>
      <div id="car" className="Car__container">
        {dataCar
          .filter((el) => el.id === isActive)
          .map((el) => (
            <img src={el.img} alt="img" className="imgcar" />
          ))}
      </div>
    </div>
  );
}
CarContainer.propTypes = {
  isActive: PropTypes.string.isRequired,
};
export default CarContainer;
