const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.use('/usuarios', require('./routes/users'))
app.use('/pedidos', require('./routes/pedidos'))

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})