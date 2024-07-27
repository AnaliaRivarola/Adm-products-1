const { Person } = require('../models/person.model');

// Obtener todas las personas
module.exports.index = (req, res) => {
    Person.find()
        .then(people => res.json(people))
        .catch(err => res.status(500).json({ message: err.message }));
};

// Crear una nueva persona
module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({ firstName, lastName })
        .then(person => res.json(person))
        .catch(err => res.status(500).json({ message: err.message }));
};
