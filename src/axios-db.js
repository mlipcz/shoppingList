import axios from 'axios';

const instance = axios.create({
    baseURL:  "https://shoppinglist-48680.firebaseio.com/"
});

export default instance;