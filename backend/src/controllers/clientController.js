const clientModel = require("../models/clientModel");

const clientController = {
  createclient: async (req, res) => {
    const {
      firstname,
      lastname,
      age,
      permis,
      picture,
      bio,
      password,
      email,
      localisation,
    } = req.body;
    try {
      const result = await clientModel.createclient(
        firstname,
        lastname,
        age,
        permis,
        picture,
        bio,
        password,
        email,
        localisation
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getClientById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await clientModel.getClientById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getClientByLocalisation: async (req, res) => {
    const { localisation } = req.params;
    try {
      const result = await clientModel.getClientByLocalisation(localisation);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await clientModel.login(email, password);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await clientModel.getAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getClientByRole: async (req, res) => {
    const { role } = req.params;
    try {
      const result = await clientModel.findClientByRole(role);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = clientController;
