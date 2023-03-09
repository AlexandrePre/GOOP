/* eslint-disable camelcase */
import { useState } from "react";
import PropTypes from "prop-types";
import "./Admin.css";
import api from "../../services/api";
import deleteCard from "../../assets/img/trash.png";

function AdminItem({ id, Name, NumberCar, Telephone, email }) {
  // eslint-disable-next-line no-unused-vars
  const [collectivite, setcollectivite] = useState();

  const deleteCar = () => {
    api
      .delete(`corporation/deleteCorporation/${id}`)
      .then((response) => setcollectivite(response))
      .catch((err) => err.response);
  };

  return (
    <div className="CardCorps">
      <div className="collectivite"> community {id}</div>
      <h2 className="ville">City :{Name}</h2>

      <div className="vehicule">number of cars : {NumberCar}</div>
      <div className="contact">
        <h2>phone : {Telephone}</h2>
        <h2>mail = {email}</h2>
      </div>

      <div className="gestion">
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

AdminItem.propTypes = {
  id: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  NumberCar: PropTypes.string.isRequired,
  Telephone: PropTypes.string.isRequired,
  email: PropTypes.number.isRequired,
};

export default AdminItem;
