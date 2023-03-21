/* eslint-disable camelcase */

const database = require("../config");

async function findAllVoyages() {
  const [res] = await database.promise().query("SELECT * FROM voyage");
  return res;
}

function findAllVoyageByDate(cityStart, cityDestination, dateStart, dateEnd) {
  return database
    .promise()
    .query(
      "SELECT * FROM voyage WHERE cityStart = ? AND cityDestination = ? AND dateStart = ? AND dateEnd = ? ",
      [cityStart, cityDestination, dateStart, dateEnd]
    )
    .then(([voyage]) => voyage);
}

function createVoyage(
  id_car,
  id_user,
  cityStart,
  cityDestination,
  dateStart,
  dateEnd,
  seatLeft
) {
  database
    .promise()
    .query(
      "INSERT INTO voyage (id_car, id_user, cityStart, cityDestination, dateStart, dateEnd, seatLeft) VALUES (?,?,?,?,?,?,?)",
      [
        id_car,
        id_user,
        cityStart,
        cityDestination,
        dateStart,
        dateEnd,
        seatLeft,
      ]
    )
    .then(([res]) => res);
}

// function createVoyage(
//   id_car,
//   id_user,
//   cityStart,
//   cityDestination,
//   DateStart,
//   dateEnd,
//   seatLeft
// ) {
//   return new Promise((resolve, reject) => {
//     bdd.query(
//       "INSERT INTO voyage (id_car, id_user, cityStart, cityDestination, DateStart, dateEnd, seatLeft) VALUES (?,?,?,?,?,?,?)",
//       [
//         id_car,
//         id_user,
//         cityStart,
//         cityDestination,
//         DateStart,
//         dateEnd,
//         seatLeft,
//       ],
//       (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//   });
// }
// function findAllVoyageByCity(cityStart, cityDestination) {
//   return new Promise((resolve, reject) => {
//     bdd.query(
//       "SELECT * FROM voyage WHERE cityStart = ? AND cityDestination = ?",
//       [cityStart, cityDestination],
//       (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//   });
// }
module.exports = {
  findAllVoyageByDate,
  createVoyage,
  findAllVoyages,
  // findAllVoyageByCity,
};
