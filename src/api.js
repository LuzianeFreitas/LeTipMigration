import axios from 'axios';

const token = 'KAAhQTPFWkIqJhlX';

const api = axios.create({
    baseURL: `https://v1.nocodeapi.com/luziane/cx/${token}/rates/convert`,
});

export default api;
