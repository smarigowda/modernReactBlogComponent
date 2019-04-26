import axios from 'axios';
console.log(axios);

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})