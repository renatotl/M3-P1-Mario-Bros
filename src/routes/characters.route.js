const express = require("express");
const route = express.Router();
const controllerCharacters = require("../controllers/characters.controller");

route.get("/All-Characters",controllerCharacters.findAllCharactersController);
route.get("/Characters-By-Id/:id",controllerCharacters.findCharacterById);


module.exports =  route;
