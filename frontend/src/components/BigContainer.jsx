import React from "react";
import ContainerSearchBar from "./searchBar/ContainerSearchBar";
import CarContainer from "./Car/CarContainer";

function BigContainer() {
  return (
    <div>
      <ContainerSearchBar />
      <CarContainer />
    </div>
  );
}

export default BigContainer;
