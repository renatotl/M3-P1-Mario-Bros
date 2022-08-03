const charactersService = require("../services/characters.service");

const findAllCharactersController = (req, res) => {
const allCharacters = charactersService.findAllCharactersService();
res.send(allCharacters);
};



module.exports = 
{
    findAllCharactersController
};
