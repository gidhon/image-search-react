import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID B-rzdPqHs8nst2duMxEuSee3dr5hemjZj22e7riwtJI',
    }
})
