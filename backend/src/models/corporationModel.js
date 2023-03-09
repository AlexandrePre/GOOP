const bdd = require("../config");

function createCorporation(name, logo, password, email) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "INSERT INTO corporation (name, logo, password, email) VALUES (?,?,?,?)",
      [name, logo, password, email],
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

function getCorporationById(id) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM corporation WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getCorporationByName(name) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM corporation WHERE name = ?",
      [name],
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

function getCorporationByEmail(email) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM corporation WHERE email = ?",
      [email],
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

function deleteCorporationbyId(id) {
  return new Promise((resolve, reject) => {
    bdd.query("DELETE FROM corporation WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateCorporation(id, name, logo, password, email) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "UPDATE corporation SET name = ?, logo = ?, password = ?, email = ? WHERE id = ?",
      [name, logo, password, email, id],
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

function getAllCorporations() {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM corporation", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  createCorporation,
  getCorporationById,
  getCorporationByName,
  getCorporationByEmail,
  deleteCorporationbyId,
  updateCorporation,
  getAllCorporations,
};
