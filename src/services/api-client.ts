import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '46e812545d64429a9868514a6fcdd692'
    }
})