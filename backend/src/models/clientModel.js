const bdd = require("../config");

function createClient(
  firstname,
  lastname,
  age,
  permis,
  picture,
  bio,
  password,
  email,
  localisation
) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "INSERT INTO client (firstname, lastname, age, permis, picture, bio, password, email, localisation) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        firstname,
        lastname,
        age,
        permis,
        picture,
        bio,
        password,
        email,
        localisation,
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

function getClientById(id) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM client WHERE id = ?", [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getClientByLocalisation(localisation) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM client WHERE localisation = ?",
      [localisation],
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

function login(email, password) {
  return new Promise((resolve, reject) => {
    bdd.query(
      "SELECT * FROM client WHERE email = ? AND password = ?",
      [email, password],
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

function getAllClients() {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM client", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function findClientByRole(role) {
  return new Promise((resolve, reject) => {
    bdd.query("SELECT * FROM client WHERE role = ?", [role], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  createClient,
  getClientById,
  getClientByLocalisation,
  login,
  getAllClients,
  findClientByRole,
};
