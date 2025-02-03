import axios from 'axios';
import { BASE_URL } from './URLEndpoint';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    },
});


// Add response interceptors (optional)
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response.data;
    },
    (error) => {
        // Handle errors (e.g., redirect to login on 401)
        if (error.response?.status === 401) {
            console.error('Ih rapaz, deu ruim');
            // Redirect to login or handle unauthorized access
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;