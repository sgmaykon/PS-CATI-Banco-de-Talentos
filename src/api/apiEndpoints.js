import { BASE_URL } from './URLEndpoint';
const API_BASE_URL = BASE_URL;

export const API_ENDPOINTS = {
    //Lists
    GET_LISTS: `${API_BASE_URL}/lists`,
    CREATE_LISTS: `${API_BASE_URL}/lists`,
    UPDATE_LISTS: (id) => `${API_BASE_URL}/lists/${id}`,     //PUT
    DELETE_LIST: (id) => `${API_BASE_URL}/lists/${id}`,     //DELETE
    
    //Tasks
    CREATE_TASKS: `${API_BASE_URL}/tasks`,
    GET_TASKS: `${API_BASE_URL}/tasks`,
    UPDATE_TASKS: (id) => `${API_BASE_URL}/tasks/${id}`,     //PUT
    DELETE_TASKS: (id) => `${API_BASE_URL}/tasks/${id}`,     //DELETE
    UPLOAD_FILE: (id) => `${API_BASE_URL}/tasks/${id}/files`, // Content-Type: multipart/form-data
    LIST_FILES: (id) => `${API_BASE_URL}/tasks/${id}/files`, //GET
    DOWNLOAD_FILE: (id) => `${API_BASE_URL}files/${id}`, //GET
};