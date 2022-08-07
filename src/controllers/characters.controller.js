const charactersService = require('../services/characters.service');

const findAllCharactersController = (req, res) => {
  const allCharacters = charactersService.findAllCharactersService();
  res.send(allCharacters);
};

const findCharacterByIdController = (req, res) => {
  const idParams = req.params.id;
  const chooseCharacters =
    charactersService.findCharacterByIdServicer(idParams);
  res.send(chooseCharacters);
};

const createCharacterController = (req, res) => {
  const character = req.body;
  const newCharacter = charactersService.createCharacterService(character);
  res.send(newCharacter);
};

const updateCharacterController = (req, res) => {
  const idParams = Number(req.params.id);
  const characterEditi = req.body;
  const updatedCharacter = charactersService.updateCharacterService(
    idParams,
    characterEditi,
  );
  res.send(characterEditi);
};

const deleteCharacterController = (req, res) => {
  const idParams = req.params.id;
  charactersService.deleteCharacterService(idParams);
  res.send({ message: 'Character was destroyed!' });
};

module.exports = {
  findAllCharactersController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
