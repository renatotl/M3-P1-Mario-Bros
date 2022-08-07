const characters = [
  {
    id: 1,
    nome: 'Mario',
    description: 'grows and crushes enemies',
    photo: 'assets/image/Mario.png',
    power: 'mushroom power',
  },
  {
    id: 2,
    nome: 'Yoshi',
    description: '',
    photo: 'assets/image/Yosh.png',
    power: 'fly and eat enemies',
  },
  {
    id: 3,
    nome: 'Luigi',
    description: 'grows and crushes enemies',
    photo: 'assets/image/Luigi.png',
    power: 'mushroom power',
  },
];

const findAllCharactersService = () => {
  return characters;
};

const findCharacterByIdServicer = (idParams) => {
  return characters.find((characters) => characters.id == idParams);
};

const createCharacterService = (newCharacter) => {
  const newId = characters.length + 1;
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};

const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  const characterIndex = characters.findIndex(
    (character) => character.id == id,
  );
  characters[characterIndex] = characterEdited;
  return characterEdited;
};

const deleteCharacterService = (id) => {
  const characterIndex = characters.findIndex(
    (character) => character.id == id,
  );
  return characters.splice(characterIndex, 1);
};

module.exports = {
  findAllCharactersService,
  findCharacterByIdServicer,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
