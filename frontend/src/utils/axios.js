import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.request.use(
    function(config) {
        //If present, add our auth token to API requests
        const authToken = localStorage.getItem('jwtToken');
        if(authToken !== null) config.headers['Authorization'] = authToken;
        return config;
    },
    function(err){return Promise.reject(err);}
);

export default axios;