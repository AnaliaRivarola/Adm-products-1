const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); // Configuración de mongoose

app.use(cors());
app.use(express.json()); // Para analizar JSON
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios

// Importa y usa las rutas
require('./routes/person.routes')(app); // Rutas para personas
require('./routes/product.routes')(app); // Rutas para productos

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
