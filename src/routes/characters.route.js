const express = require("express");
const route = express.Router();
const controllerCharacters = require("../controllers/characters.controller");

route.get("/All-Characters",controllerCharacters.findAllCharactersController);
route.get("/Characters-By-Id/:id",controllerCharacters.findCharacterByIdController);
route.post("/Create-character",controllerCharacters.createCharacterController);
route.put("/Update-Character/:id",controllerCharacters.updateCharacterController);
route.delete("/Detete-character/:id",controllerCharacters.deleteCharacterController);

module.exports =  route;
