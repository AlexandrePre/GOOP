/* eslint-disable camelcase */
const bdd = require("../config");

function findAllVoyages() {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM voyage", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function findAllVoyageByDate(cityStart, cityDestination, DateStart, dateEnd) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM voyage WHERE cityStart = ? AND cityDestination = ? AND DateStart = ? AND dateEnd = ? ",
      [cityStart, cityDestination, DateStart, dateEnd],
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

function createVoyage(
  id_car,
  id_user,
  cityStart,
  cityDestination,
  DateStart,
  dateEnd,
  seatLeft
) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "INSERT INTO voyage (id_car, id_user, cityStart, cityDestination, DateStart, dateEnd, seatLeft) VALUES (?,?,?,?,?,?,?)",
      [
        id_car,
        id_user,
        cityStart,
        cityDestination,
        DateStart,
        dateEnd,
        seatLeft,
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
function findAllVoyageByCity(cityStart, cityDestination) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM voyage WHERE cityStart = ? AND cityDestination = ?",
      [cityStart, cityDestination],
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
module.exports = {
  findAllVoyageByDate,
  createVoyage,
  findAllVoyages,
  findAllVoyageByCity,
};
