const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.use("/user" ,       require('./routes/users'));
app.use("/producto",    require('./routes/productos'));
app.use("/cesta",       require('./routes/cesta'));
app.use("/comentario",  require('./routes/comentarios'));
app.use("/galeria",     require('./routes/galeria'));
app.use("/contacto",    require('./routes/contacto'));
app.use("/politicas",   require('./routes/politicas'));

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})