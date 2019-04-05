// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.
    config.params.APPID = 'be35f5ff6cb821a7e0e43a0898c1f21d';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});