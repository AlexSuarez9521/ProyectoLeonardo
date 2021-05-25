import axios from 'axios';

const ClienteAxios = axios.create({
    baseURL : "https://servidor-heroku-express.herokuapp.com",
});

export default ClienteAxios