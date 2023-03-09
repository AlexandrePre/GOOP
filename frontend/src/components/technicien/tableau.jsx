import { useState, useEffect } from "react";
import CardsItem from "./CardsItem";
import api from "../../services/api";
import "./Cards.css";

function tableau() {
  const [allcar, setAllcar] = useState([]);

  const getAllCar = () => {
    api
      .get("car/getAllCars")
      .then((response) => setAllcar(response.data))
      .catch((err) => err(err.response));
  };

  useEffect(() => {
    getAllCar();
  }, [allcar]);

  const cardAllMap = allcar.map((cardItem) => (
    <CardsItem
      id={cardItem.id}
      modele={cardItem.modele}
      brand={cardItem.brand}
      kilometer={cardItem.kilometer}
      color={cardItem.color}
    />
  ));

  return <div className="Allcars">{cardAllMap}</div>;
}

export default tableau;
