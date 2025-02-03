import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const getTasks = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_TASKS);
        return response;
    } catch (error) {
        console.error('Error fetching lists:', error);
        throw error;
    }
}

export const createTask = async (data) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.CREATE_TASKS, data);
        return response;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

export const updateTask = async (id, data) => {
    try {
        const response = await axiosInstance.put(API_ENDPOINTS.UPDATE_TASKS(id), data);
        return response;
    } catch (error) {
        console.error(`Error updating task with id ${id}:`, error);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await axiosInstance.delete(API_ENDPOINTS.DELETE_TASKS(id));
        return response;
    } catch (error) {
        console.error(`Error deleting task with id ${id}:`, error);
        throw error;
    }
}

export const getFiles = async (id) => {
    try{
        const response = await axiosInstance.get(API_ENDPOINTS.LIST_FILES(id));
        return response;
    }
    catch(error){
        console.error(`Error listing tasks with id ${id}:`, error);
        throw error;
    }
}

export const downloadFile = async (id) => {
    try{
        const response = await axiosInstance.get(API_ENDPOINTS.DOWNLOAD_FILE(id));
        return response;
    }
    catch(error){
        console.error(`Error downloading file with id ${id}:`, error);
        throw error;
    }
}


