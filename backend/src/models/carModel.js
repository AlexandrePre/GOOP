const bdd = require("../config");

function createCar(
  id,
  model,
  brand,
  kilometer,
  color,
  seatNumber,
  disponible,
  imatriculation,
  door,
  Category,
  PrixJ
) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "INSERT INTO car (id, model, brand, kilometer, color, seatNumber, disponible, imatriculation, door, Category, PrixJ) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        model,
        brand,
        kilometer,
        color,
        seatNumber,
        disponible,
        imatriculation,
        door,
        Category,
        PrixJ,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function getCarById(id) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getCarByModel(model) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car WHERE modele = ?", [model], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getCarByBrand(brand) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car WHERE brand = ?", [brand], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getCarByColor(color) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car WHERE color = ?", [color], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getCarBySeatNumber(seatNumber) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM car WHERE seatNumber = ?",
      [seatNumber],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function getCarByCategory(Category) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM car WHERE Category = ?",
      [Category],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function getCarByPrixJ(PrixJ) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car WHERE PrixJ = ?", [PrixJ], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function deleteCarById(id) {
  return new Promise((resolve, reject) => {
    bdd.query("DELETE FROM car WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateCarById(
  id,
  model,
  brand,
  kilometer,
  color,
  seatNumber,
  disponible,
  imatriculation,
  door,
  Category,
  PrixJ
) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "UPDATE car SET model = ?, brand = ?, kilometer = ?, color = ?, seatNumber = ?, disponible = ?, imatriculation = ?, door = ?, Category = ?, PrixJ = ? WHERE id = ?",
      [
        model,
        brand,
        kilometer,
        color,
        seatNumber,
        disponible,
        imatriculation,
        door,
        Category,
        PrixJ,
        id,
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

function getAllCars() {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM car", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  createCar,
  getCarById,
  getCarByModel,
  getCarByBrand,
  getCarByColor,
  getCarBySeatNumber,
  getCarByCategory,
  getCarByPrixJ,
  deleteCarById,
  updateCarById,
  getAllCars,
};
