import { useState, useEffect } from "react";
import AdminItem from "./AdminItem";
import api from "../../services/api";
import "../technicien/Cards.css";

function AdminComp() {
  const [allcomp, setAllcomp] = useState([]);

  const getAllComp = () => {
    api
      .get("corporation/getAllCorporations")
      .then((response) => setAllcomp(response.data))
      .catch((err) => err.response);
  };

  useEffect(() => {
    getAllComp();
  }, [allcomp]);

  const cardAllComp = allcomp.map((corpItem) => (
    <AdminItem
      id={corpItem.id}
      Name={corpItem.Name}
      email={corpItem.email}
      NumberCar={corpItem.NumberCar}
      Telephone={corpItem.Telephone}
    />
  ));

  return <div className="Allcorp">{cardAllComp}</div>;
}

export default AdminComp;
