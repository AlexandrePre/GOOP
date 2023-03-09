const database = require("../config");
const bdd = require("../config");

/* Model User pour chaque donnée de la table User */

/* Modes pour récupérer les USERS */

const findAll = () => {
  return database
    .promise()
    .query("SELECT * FROM client")
    .then(([res]) => res);
};

const findOne = (id) => {
  return database
    .promise()
    .query("SELECT * FROM client WHERE id =?", [Number(id)])
    .then(([res]) => res);
};

const findByEmail = (email) => {
  return database
    .promise()
    .query("SELECT * FROM client WHERE email =?", [email])
    .then(([res]) => res);
};
const createOne = (payload) => {
  return database
    .promise()
    .query("INSERT INTO client SET ?", [payload])
    .then(([res]) => res);
};

const deleteOne = (id) => {
  return database
    .promise()
    .query("DELETE FROM client WHERE id = ?", [id])
    .then(([res]) => res);
};

const updateOne = (payload, id) => {
  return database
    .promise()
    .query("UPDATE client SET ? Where id = ?", [payload, id])
    .then(([res]) => res);
};
const updateImage = (url, id) => {
  return database
    .promise()
    .query("UPDATE client SET image = ? WHERE id = ?", [url, id])
    .then(([res]) => res);
};
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
  findAll,
  findOne,
  createOne,
  findByEmail,
  deleteOne,
  updateOne,
  updateImage,
  findClientByRole,
};
