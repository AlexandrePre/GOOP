const bdd = require("../config");

function getCarByDate(dateStart, dateEnd) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT modele FROM status INNER JOIN car ON car.id = status.id_car WHERE ? NOT BETWEEN status.dateStart AND status.DateEnd OR ? NOT BETWEEN status.dateStart AND status.DateEnd;",
      [dateStart, dateEnd],
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
  getCarByDate,
};
