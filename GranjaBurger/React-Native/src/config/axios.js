import axios from 'axios';

const ClienteAxios = axios.create({
    baseURL : "https://granja-burger.herokuapp.com"
});

export default ClienteAxios;