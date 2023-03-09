/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { useState } from "react";
import PropTypes from "prop-types";
import "./Cards.css";
import outil from "../../assets/img/repare.png";
import api from "../../services/api";
import deleteCard from "../../assets/img/trash.png";

function CardsItem({ id, modele, brand, kilometer, color }) {
  // eslint-disable-next-line no-unused-vars
  const [car, setCar] = useState();

  const deleteCar = () => {
    api
      .delete(`car/deleteCar/${id}`)
      .then((response) => setCar(response))
      .catch((err) => alert(err.response));
  };

  return (
    <div className="CardItem">
      <div className="status"> Car {id}</div>
      <h2 className="modele">
        {brand} {modele}
      </h2>

      <h2>INFORMATIONS</h2>
      <div className="info">
        <h2>color : {color}</h2>
        <h2>kilometrages = {kilometer}</h2>
      </div>

      <div className="gestion">
        <img src={outil} alt="outil" className="outil" />
        <img
          src={deleteCard}
          onClick={deleteCar}
          alt="outil"
          className="outil"
          role="presentation"
        />
      </div>
    </div>
  );
}

CardsItem.propTypes = {
  id: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  kilometer: PropTypes.string.isRequired,
  color: PropTypes.number.isRequired,
};

export default CardsItem;
