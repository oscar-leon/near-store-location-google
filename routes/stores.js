const express = require("express");
const routes = express.Router();
const storesController = require("../controllers/stores");

routes.get("/", storesController.getStoresByProximity);
routes.get("/next", storesController.getNextByToken);

module.exports = routes;
