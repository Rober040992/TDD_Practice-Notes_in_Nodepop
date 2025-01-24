import axios from 'axios';

// usamos la web https://jsonplaceholder.typicode.com/ para simular peticiones a una base de datos real
// y asi manejar peticiones asyncronas reales para testear
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export class Users {

    static all() {
        return axios.get(`${BASE_URL}users`).then(res => res.data);
    }
    
    static create(user) {
        return axios.post(`${BASE_URL}users`, user).then(res => res.data);
    } 
}