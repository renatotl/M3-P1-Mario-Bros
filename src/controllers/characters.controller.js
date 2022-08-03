const charactersService = require("../services/characters.service");

const findAllCharactersController = (req, res) => {
const allCharacters = charactersService.findAllCharactersService();
res.send(allCharacters);
};

const findCharacterById = (req,res) => {
 const idParams = req.params.id;
const chooseCharacters = charactersService.findCharacterByIdServicer(idParams);
res.send(chooseCharacters);
};


module.exports = 
{
    findAllCharactersController,
    findCharacterById
};
