const characters = [
    {
        id: 1,
        nome: 'Mario',
        description: '',
        photo: 'assets/image/Mario.png',
        power: '',
    },
    {
        id: 2,
        nome: 'Yoshi',
        description: '',
        photo: 'assets/image/Yosh.png',
        power: '',
    },
    {
        id: 3,
        nome: 'Luigi',
        description: '',
        photo: 'assets/image/Luigi.png',
        power: '',
    },
]

const findAllCharactersService = () => {
 return characters
};

module.exports = {
    findAllCharactersService
}
