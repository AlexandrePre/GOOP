import React from "react";
import PropTypes from "prop-types";

function CarImg({ img }) {
  return (
    <div className="container__imgcar">
      <img src={img} alt="img" className="imgcar" />
    </div>
  );
}
CarImg.propTypes = {
  img: PropTypes.string.isRequired,
};
export default CarImg;
