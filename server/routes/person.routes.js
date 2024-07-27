const PersonController = require('../controllers/person.controller');

module.exports = function(app) {
    app.get('/api/people', PersonController.index); // Ruta para obtener todas las personas
    app.post('/api/people', PersonController.createPerson); // Ruta para crear una nueva persona
};
