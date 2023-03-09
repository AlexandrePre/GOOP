/* eslint-disable camelcase */
const bdd = require("../config");

function createStatus(status, datestart, dateend, id_car) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "INSERT INTO status (status,datestart,dateend,id_car) VALUES (?,?,?,?)",
      [status, datestart, dateend, id_car],
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

function getStatusById(id) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM status WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getStatusByIdCar(id_car) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM status WHERE id_car = ?",
      [id_car],
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

function getStatusByStartDate(datestart) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM status WHERE datestart = ?",
      [datestart],
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

function getStatusByEndDate(dateend) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM status WHERE dateend = ?",
      [dateend],
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

function deleteStatus(id) {
  return new Promise((resolve, reject) => {
    bdd.query("DELETE FROM status WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateStatus(id, status, datestart, dateend, id_car) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "UPDATE status SET status = ?, datestart = ?, dateend = ?, id_car = ? WHERE id = ?",
      [status, datestart, dateend, id_car, id],
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
  createStatus,
  getStatusById,
  getStatusByIdCar,
  getStatusByStartDate,
  getStatusByEndDate,
  deleteStatus,
  updateStatus,
};
